'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Code2, GitBranch, Link2, Mail, AtSign, Terminal, LayoutDashboard, Users, CreditCard, ClipboardList, Dumbbell, BarChart3 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t overflow-hidden font-sans pt-20 pb-10"
      style={{ backgroundColor: '#080c12', borderColor: 'rgba(255,255,255,0.05)' }}>

      {/* Scan line top */}
      <div className="absolute top-0 left-0 w-full h-[1px]"
        style={{ background: 'linear-gradient(to right, transparent, #dc262650, transparent)' }} />

      {/* Ambient glow - red GymShark */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full pointer-events-none"
        style={{ background: '#dc262608', filter: 'blur(100px)' }} />

      {/* Ambient glow - corelix emerald */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: '#10b98108', filter: 'blur(120px)' }} />

      <div className="max-w-7xl mx-auto px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">

          {/* COL 1: GymShark CRM */}
          <div className="space-y-7 lg:col-span-1">
            <Image src="/Logo.png" alt="GymShark CRM" width={150} height={45} className="object-contain" />
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.35)', maxWidth: '220px' }}>
              Sistema de gestión integral para gimnasios. Socios, pagos, asistencia y métricas en un solo lugar.
            </p>
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 rounded-full animate-ping absolute inset-0" style={{ backgroundColor: '#dc2626' }} />
                <div className="w-2 h-2 rounded-full relative" style={{ backgroundColor: '#dc2626', boxShadow: '0 0 8px #dc2626' }} />
              </div>
              <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>Sistema_Online</span>
            </div>
          </div>

          {/* COL 2: CRM Links */}
          <div className="space-y-7">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2 font-mono"
              style={{ color: 'rgba(255,255,255,0.35)' }}>
              <Terminal size={13} style={{ color: '#dc2626' }} /> /Módulos
            </h4>
            <ul className="space-y-3 text-sm font-mono" style={{ color: 'rgba(255,255,255,0.25)' }}>
              {[
                { href: '/dashboard', icon: LayoutDashboard, label: '/Dashboard' },
                { href: '/members', icon: Users, label: '/Socios' },
                { href: '/plans', icon: Dumbbell, label: '/Planes' },
                { href: '/payments', icon: CreditCard, label: '/Pagos' },
                { href: '/attendance', icon: ClipboardList, label: '/Asistencia' },
                { href: '/reports', icon: BarChart3, label: '/Reportes' },
              ].map(({ href, icon: Icon, label }) => (
                <li key={href}>
                  <Link href={href}
                    className="flex items-center gap-2 transition-all hover:pl-1.5 group"
                    style={{ color: 'rgba(255,255,255,0.25)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#dc2626')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}>
                    <Icon size={12} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: Corelix branding */}
          <div className="space-y-7">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] font-mono"
              style={{ color: 'rgba(255,255,255,0.35)' }}>
              /Desarrollado_por
            </h4>
            <div className="flex items-center gap-3 group cursor-default">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-500"
                style={{ backgroundColor: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}>
                <Code2 size={18} style={{ color: '#10b981' }} />
              </div>
              <span className="font-black text-xl tracking-tighter text-white uppercase italic">Corelix</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Software House especializada en arquitecturas escalables, sistemas de gestión y experiencias digitales de alto impacto.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: GitBranch, href: '#' },
                { icon: Link2, href: '#' },
                { icon: AtSign, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href}
                  className="transition-all hover:-translate-y-1"
                  style={{ color: 'rgba(255,255,255,0.2)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#10b981')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.2)')}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* COL 4: Contacto Corelix */}
          <div className="space-y-7">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] font-mono"
              style={{ color: 'rgba(255,255,255,0.35)' }}>
              /Contacto
            </h4>
            <p className="text-xs leading-relaxed italic" style={{ color: 'rgba(255,255,255,0.25)' }}>
              ¿Querés un sistema como este para tu negocio? Conectemos nuestras terminales.
            </p>
            <a href="mailto:e-aguirre@corelix.com.ar"
              className="flex items-center justify-between p-4 rounded-2xl transition-all duration-500 relative overflow-hidden group"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
              onMouseEnter={e => {
                (e.currentTarget.style.backgroundColor = '#10b981');
                (e.currentTarget.style.borderColor = '#10b981');
                (e.currentTarget.style.color = '#000');
              }}
              onMouseLeave={e => {
                (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)');
                (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)');
                (e.currentTarget.style.color = 'inherit');
              }}>
              <span className="font-mono text-xs uppercase font-black text-white group-hover:text-black transition-colors">
                e-aguirre@corelix.com.ar
              </span>
              <Mail size={16} className="text-white group-hover:text-black group-hover:rotate-12 transition-all" />
            </a>
            <a href="tel:+543814626095"
              className="flex items-center gap-2 font-mono text-xs transition-colors"
              style={{ color: 'rgba(255,255,255,0.2)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#10b981')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.2)')}>
              +54 381 462-6095
            </a>
            <p className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.15)' }}>
              my.corelix.com.ar
            </p>
          </div>

        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 font-mono text-[10px] uppercase tracking-[0.2em]"
            style={{ color: 'rgba(255,255,255,0.18)' }}>

            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2 h-2 rounded-full animate-ping absolute inset-0" style={{ backgroundColor: '#10b981' }} />
                <div className="w-2 h-2 rounded-full relative" style={{ backgroundColor: '#10b981', boxShadow: '0 0 8px #10b981' }} />
              </div>
              <span>Corelix_Node_Online</span>
            </div>

            <p>© {currentYear} GymShark CRM · Powered by Corelix</p>

            <div className="flex items-center gap-6">
              <span className="cursor-pointer transition-colors hover:text-emerald-400">Privacy.sh</span>
              <span className="cursor-pointer transition-colors hover:text-emerald-400">Terms.md</span>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
