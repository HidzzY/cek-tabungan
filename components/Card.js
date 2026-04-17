import { ChevronRight } from 'lucide-react';

export default function Card({ target, saldo }) {
  const percent = Math.min((saldo / target.goal) * 100, 100).toFixed(1);

  return (
    <div className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:bg-white/[0.08] transition-all group">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${target.color} text-white shadow-lg`}>
            {target.icon}
          </div>
          <span className="font-semibold text-sm">{target.name}</span>
        </div>
        <span className="text-xs font-bold text-indigo-400">{percent}%</span>
      </div>
      
      <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-1000 ease-out ${target.color}`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      
      <div className="mt-2 flex justify-between items-center opacity-40 text-[10px] font-mono">
        <span>Target: Rp {target.goal.toLocaleString('id-ID')}</span>
        <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}