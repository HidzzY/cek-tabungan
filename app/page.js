"use client";
import React, { useState } from 'react';
import { Target, PlusCircle, Smartphone, Wifi, BookOpen } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Navbar from '../components/Navbar';
import StatBox from '../components/StatBox';
import Card from '../components/Card';

export default function SavingsApp() {
  const [saldo, setSaldo] = useLocalStorage('hidz_saldo', 0);
  const [input, setInput] = useState('');

  const updateSaldo = () => {
    const nominal = parseInt(input);
    if (!isNaN(nominal) && nominal > 0) {
      setSaldo(saldo + nominal);
      setInput('');
    }
  };

  const targets = [
    { id: 1, name: 'Beli/Servis HP', icon: <Smartphone size={18}/>, goal: 1500000, color: 'bg-blue-600' },
    { id: 2, name: 'Bayar WiFi', icon: <Wifi size={18}/>, goal: 50000, color: 'bg-purple-600' },
    { id: 3, name: 'Dana Sekolah', icon: <BookOpen size={18}/>, goal: 100000, color: 'bg-emerald-600' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-200 p-6 selection:bg-indigo-500/30">
      <div className="max-w-md mx-auto space-y-8 animate-in fade-in duration-700">
        
        <Navbar onReset={() => {
          if (confirm("Hapus semua data tabungan?")) setSaldo(0);
        }} />

        <StatBox saldo={saldo} />

        <div className="flex gap-3">
          <input 
            type="number" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && updateSaldo()}
            placeholder="Nabung berapa hari ini?"
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white/10 transition-all text-lg placeholder:text-slate-600"
          />
          <button 
            onClick={updateSaldo}
            className="bg-white text-black p-4 rounded-2xl hover:scale-95 active:scale-90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <PlusCircle size={28} />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold flex items-center gap-2 tracking-tight">
              <Target size={18} className="text-indigo-400"/> My Goals Progress
            </h3>
            <span className="text-[10px] text-slate-600 font-mono tracking-widest">v1.0.0-PRO</span>
          </div>

          {targets.map((t) => (
            <Card key={t.id} target={t} saldo={saldo} />
          ))}
        </div>

        <footer className="pt-12 pb-6 text-center">
            <p className="text-[10px] text-slate-700 uppercase tracking-[6px] font-medium">
              Consistency is Key
            </p>
        </footer>
      </div>
    </div>
  );
}