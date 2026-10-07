import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
export type Verdict = 'yes' | 'partially' | 'no';
export type Session = { id: string; date: string; seconds: number; worked: string; intention: string; verdict: Verdict | null; previousIntention: string | null };
type Timer = { elapsed: number; startedAt: number | null; active: boolean };
type Store = { sessions: Session[]; timer: Timer; pins: string[]; pinWeek: string };
export function weekKey(date = new Date()) { const d = new Date(date); d.setHours(0,0,0,0); d.setDate(d.getDate() - (d.getDay() + 6) % 7); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
export function weeklyStats(sessions: Session[], week: string) {
 const rows = sessions.filter(s => weekKey(new Date(s.date)) === week);
 const judged = rows.filter(s => s.verdict !== null); const yes = judged.filter(s => s.verdict === 'yes').length;
 let streak = 0, best = 0; for(const s of judged) { streak = s.verdict === 'yes' ? streak + 1 : 0; best = Math.max(best,streak); }
 return { rows, judged: judged.length, yes, best, hours: rows.reduce((sum,s)=>sum+s.seconds,0)/3600 };
}
const emptyTimer: Timer = { elapsed:0, startedAt:null, active:false };
const Context = createContext<ReturnType<typeof useStore> | null>(null);
function useStore() {
 const [data,setData] = useState<Store>({sessions:[],timer:emptyTimer,pins:[],pinWeek:''});
 const [ready,setReady] = useState(false); const [now,setNow] = useState(0); const [storageError,setStorageError] = useState(false);
 useEffect(()=> { setNow(Date.now()); try { const raw = localStorage.getItem('pikup-notebook-v2'); if(raw) { const saved = JSON.parse(raw); if(Array.isArray(saved.sessions) && saved.timer && Array.isArray(saved.pins)) setData(saved); } } catch { setStorageError(true); } setReady(true); },[]);
 useEffect(()=> { const id=setInterval(()=>setNow(Date.now()),1000); return ()=>clearInterval(id); },[]);
 useEffect(()=> { if(ready) { try { localStorage.setItem('pikup-notebook-v2',JSON.stringify(data)); } catch { setStorageError(true); } } },[data,ready]);
 const week = weekKey(new Date(now || Date.now()));
 const elapsed = data.timer.elapsed + (data.timer.startedAt === null ? 0 : Math.max(0,Math.floor((now-data.timer.startedAt)/1000)));
 const stats = weeklyStats(data.sessions,week);
 const unlocked = ['seed',...(stats.best>=3?['star']:[]),...(stats.yes>=5?['flower']:[])].filter(id=>id!=='seed'||stats.yes>=1);
 const pins = data.pinWeek === week ? data.pins.filter(p=>unlocked.includes(p)) : [];
 function start() { const time=Date.now(); setNow(time); setData(d=>({...d,timer:{...d.timer,active:true,startedAt:time}})); }
 function pause() { const time=Date.now(); setNow(time); setData(d=>({...d,timer:{...d.timer,elapsed:d.timer.elapsed+(d.timer.startedAt === null?0:Math.max(0,Math.floor((time-d.timer.startedAt)/1000))),startedAt:null}})); }
 function save(worked:string,intention:string,verdict:Verdict|null) { const time=Date.now(); setData(d=>({...d,sessions:[...d.sessions,{id:crypto.randomUUID(),date:new Date(time).toISOString(),seconds:d.timer.elapsed+(d.timer.startedAt===null?0:Math.max(0,Math.floor((time-d.timer.startedAt)/1000))),worked,intention,verdict,previousIntention:d.sessions.at(-1)?.intention ?? null}],timer:emptyTimer})); }
 function togglePin(id:string) { if(!unlocked.includes(id)) return; setData(d=>({...d,pinWeek:week,pins:pins.includes(id)?pins.filter(p=>p!==id):[...pins,id]})); }
 return { ...data,ready,storageError,elapsed,week,stats,pins,unlocked,start,pause,save,togglePin,last:data.sessions.at(-1) };
}
export function PikupProvider({children}:{children:ReactNode}) { const value=useStore(); return <Context.Provider value={value}>{children}</Context.Provider>; }
export function usePikup() { const value=useContext(Context); if(!value) throw new Error('Pikup provider missing'); return value; }
export function formatTime(seconds:number) { return [Math.floor(seconds/3600),Math.floor(seconds/60)%60,seconds%60].map(n=>String(n).padStart(2,'0')); }
