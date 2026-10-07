import { Flower2, Sprout, Star } from 'lucide-react';
import plantImage from '@/assets/notebook-plant.png';
export function Plant({growth=0,className='plant-art'}:{growth?:number;className?:string}) {
 if(growth>=5) return <img className={className} src={plantImage} alt="Your plant in bloom, with new leaves and little flowers" width={768} height={1024} loading="lazy"/>;
 return <svg className={`${className} plant-svg`} viewBox="0 0 220 260" fill="none" role="img" aria-label={growth===0?'A little seedling, ready to grow':`A growing plant with ${growth * 2 + 2} leaves`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
 <path d="M53 241q57 7 115-1M68 245l-13 1m119-3 8 1" stroke="var(--border)"/>
 <path className="pot" d="M78 194l7 43q26 8 49-1l8-43M73 187q34-8 75 0l-3 13q-33 7-70-1z"/>
 <path d={growth===0?'M110 187q4-31-3-52':growth===1?'M110 187q-6-48 2-85':growth===2?'M110 187q-8-69 0-107':'M110 187q-8-91 1-137'} stroke="currentColor"/>
 <path className="leaf" d="M109 147q-29-1-36-22 26-3 36 22zM108 137q1-21 26-23-4 23-26 23z"/>
 <path d="M105 143l-20-11m26 1 15-12" stroke="currentColor" strokeWidth="1"/>
 {growth>=1&&<><path className="leaf" d="M108 115q-27-2-37-28 30 0 37 28zM111 103q9-25 35-29-5 30-35 29z"/><path d="M105 110L81 94m33 5 23-17" stroke="currentColor" strokeWidth="1"/></>}
 {growth>=2&&<><path className="leaf" d="M110 88q-30-5-37-29 29 1 37 29zM111 78q8-30 34-31-2 26-34 31z"/><path d="M107 83L82 65m31 9 23-20" stroke="currentColor" strokeWidth="1"/></>}
 {growth>=3&&<><path className="leaf" d="M111 57q-20-16-7-36 18 12 7 36z"/><path d="M108 47l-3-17" stroke="currentColor" strokeWidth="1"/></>}
 {growth>=4&&<><path d="M111 160q31-20 42-52" stroke="currentColor"/><path className="bloom" d="M152 108q-13-3-7-12-9-12 3-13 2-15 11-6 15-4 14 8 12 6 0 14-1 13-12 8-5 12-9 1z"/><circle cx="159" cy="93" r="4" stroke="currentColor"/></>}
 <path d="M86 211l5 19m7-15 3 19m23-20-2 18m9-22-4 22" stroke="var(--pot)" strokeWidth="1"/>
 </svg>;
}
export const stickers=[{id:'seed',name:'A little follow-through',detail:'1 session on track',Icon:Sprout},{id:'star',name:'Finding your rhythm',detail:'3 sessions in a row on track',Icon:Star},{id:'flower',name:'Growing with intention',detail:'5 sessions on track',Icon:Flower2}];
export function Sticker({id}:{id:string}) { const item=stickers.find(s=>s.id===id); if(!item) return null; return <span className={`sticker ${id==='star'?'sticker-star':id==='flower'?'sticker-flower':''}`}><item.Icon aria-hidden="true"/></span>; }
