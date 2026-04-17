import { Wallet } from 'lucide-react';

export default function StatBox({ saldo }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 p-8 shadow-2xl shadow-indigo-500/20">
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2 opacity-80">
          <Wallet size={16} />
          <span className="text-xs font-semibold tracking-wider uppercase">Total Savings</span>
        </div>
        <h2 className="text-4xl font-black tracking-tight tracking-tighter text-white">
          Rp {saldo.toLocaleString('id-ID')}
        </h2>
      </div>
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
    </div>
  );
}