'use client';

import { Bell, Search } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 py-4 mb-2"
      style={{ borderBottom: '1px solid #1f2937' }}>
      <div>
        <h1 className="text-xl font-bold text-white">{title}</h1>
        {subtitle && <p className="text-sm mt-0.5" style={{ color: '#6b7280' }}>{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
          style={{ backgroundColor: '#1f2937', color: '#6b7280', border: '1px solid #374151' }}>
          <Search size={15} />
          <span className="hidden sm:block">Buscar...</span>
        </div>
        <button className="relative p-2 rounded-lg" style={{ backgroundColor: '#1f2937' }}>
          <Bell size={18} style={{ color: '#9ca3af' }} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
            style={{ backgroundColor: '#dc2626' }} />
        </button>
      </div>
    </header>
  );
}
