'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  CreditCard,
  ClipboardList,
  Dumbbell,
  BarChart3,
  Settings,
  LogOut,
} from 'lucide-react';

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/members', icon: Users, label: 'Socios' },
  { href: '/plans', icon: Dumbbell, label: 'Planes' },
  { href: '/payments', icon: CreditCard, label: 'Pagos' },
  { href: '/attendance', icon: ClipboardList, label: 'Asistencia' },
  { href: '/reports', icon: BarChart3, label: 'Reportes' },
];

const bottomItems = [
  { href: '/settings', icon: Settings, label: 'Configuración' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 flex flex-col z-40"
      style={{ backgroundColor: '#0d1117', borderRight: '1px solid #1f2937' }}>

      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-4" style={{ borderBottom: '1px solid #1f2937' }}>
        <Image src="/Logo.png" alt="GymShark CRM" width={140} height={40} className="object-contain" priority />
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <p className="text-xs font-semibold uppercase tracking-widest px-3 mb-3"
          style={{ color: '#4b5563' }}>Menú</p>
        {navItems.map(({ href, icon: Icon, label }) => {
          const active = pathname === href || pathname.startsWith(href + '/');
          return (
            <Link key={href} href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 group"
              style={{
                backgroundColor: active ? '#dc262620' : 'transparent',
                color: active ? '#dc2626' : '#9ca3af',
                borderLeft: active ? '3px solid #dc2626' : '3px solid transparent',
              }}>
              <Icon size={18} className="flex-shrink-0 transition-colors"
                style={{ color: active ? '#dc2626' : '#6b7280' }} />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-4 space-y-1" style={{ borderTop: '1px solid #1f2937' }}>
        <div className="pt-3">
          {bottomItems.map(({ href, icon: Icon, label }) => (
            <Link key={href} href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium"
              style={{ color: '#6b7280' }}>
              <Icon size={18} />
              {label}
            </Link>
          ))}
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium w-full"
            style={{ color: '#6b7280' }}>
            <LogOut size={18} />
            Cerrar sesión
          </button>
        </div>
        {/* User */}
        <div className="flex items-center gap-3 px-3 py-3 rounded-lg mt-2"
          style={{ backgroundColor: '#1f2937' }}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
            style={{ backgroundColor: '#dc2626' }}>
            A
          </div>
          <div className="min-w-0">
            <p className="text-white text-sm font-medium truncate">Admin</p>
            <p className="text-xs truncate" style={{ color: '#6b7280' }}>gymshark.crm</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
