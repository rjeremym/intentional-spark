import { Link, useRouterState } from '@tanstack/react-router';
import { Clock3, Sprout, TrendingUp, Heart } from 'lucide-react';
import { usePikup } from '@/lib/pikup';
import type { ReactNode } from 'react';
export function PikupShell({children}:{children:ReactNode}) {
 const path=useRouterState({select:s=>s.location.pathname}); const {storageError}=usePikup();
 return <div className="notebook"><header className="app-header"><Link to="/" className="brand" aria-label="Pikup home"><Sprout/>pikup<span className="text-primary">.</span></Link><nav className="flex items-center gap-3" aria-label="Main navigation"><Link to="/" className={`nav-link ${path==='/'?'active':''}`}><Clock3 size={16}/>My session</Link><Link to="/weekly" className={`nav-link ${path==='/weekly'?'active':''}`}><TrendingUp size={16}/>This week</Link></nav></header>{children}{storageError&&<p role="status" className="text-center text-sm text-muted-foreground px-6">Your browser couldn’t save this notebook. Keep this tab open to retain your session.</p>}</div>;
}
export function Footer() {return <footer className="footer"><span className="flex items-center gap-2"><Sprout size={13}/>One project. One intention at a time.</span><span className="flex items-center gap-2">A little progress, on purpose.<Heart size={11}/></span></footer>;}
