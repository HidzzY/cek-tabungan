import { Trash2 } from 'lucide-react';

export default function Navbar({ onReset }) {
  return (
    <header className="flex justify-between items-center py-4">
      <div>
        <h1 className="text-sm font-medium text-slate-500 tracking-widest uppercase">Vault Hidz</h1>
        <p className="text-xl font-bold bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent italic tracking-tighter">
          Leveling Up My Future
        </p>
      </div>
      <button 
        onClick={onReset} 
        className="p-2 bg-red-500/10 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all shadow-lg"
      >
        <Trash2 size={20} />
      </button>
    </header>
  );
}