'use client';

import { useState } from 'react';
import { FlaskConical, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DemoBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="flex items-center justify-between px-4 py-2.5 text-xs font-mono"
      style={{ backgroundColor: '#1a0a00', borderBottom: '1px solid #f59e0b30' }}>
      <div className="flex items-center gap-2" style={{ color: '#f59e0b' }}>
        <FlaskConical size={13} />
        <span className="font-semibold uppercase tracking-wider">Modo Demo</span>
        <span className="hidden sm:inline" style={{ color: 'rgba(245,158,11,0.6)' }}>
          — Estás viendo datos de ejemplo. Esta instancia no está conectada a una base de datos real.
        </span>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0">
        <Link href="/#solicitar"
          className="hidden sm:flex items-center gap-1 font-semibold transition-colors"
          style={{ color: '#f59e0b' }}>
          Activar mi cuenta <ArrowRight size={11} />
        </Link>
        <button onClick={() => setVisible(false)}
          className="p-0.5 rounded transition-colors"
          style={{ color: 'rgba(245,158,11,0.5)' }}>
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
