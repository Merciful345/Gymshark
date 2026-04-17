'use client';

import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import {
  Users, CreditCard, ClipboardList, Dumbbell, BarChart3,
  ArrowRight, Zap, TrendingUp, Shield, Star,
} from 'lucide-react';

const features = [
  { icon: Users, title: 'Gestión de Socios', description: 'Administrá toda la base de socios: altas, bajas, renovaciones y seguimiento de asistencia.' },
  { icon: Dumbbell, title: 'Planes y Membresías', description: 'Creá y gestioná planes flexibles con precios, duración y beneficios personalizados.' },
  { icon: CreditCard, title: 'Control de Pagos', description: 'Seguimiento de cobros, alertas de vencimiento y historial de transacciones completo.' },
  { icon: ClipboardList, title: 'Registro de Asistencia', description: 'Control de entrada en tiempo real, historial por socio y estadísticas diarias.' },
  { icon: BarChart3, title: 'Reportes y Métricas', description: 'Dashboards con evolución de ingresos, crecimiento de socios y rendimiento mensual.' },
  { icon: Shield, title: 'Alertas Inteligentes', description: 'Notificaciones automáticas de vencimientos, pagos pendientes y socios inactivos.' },
];

const stats = [
  { label: 'Socios activos', value: '190' },
  { label: 'Ingresos este mes', value: '$189K' },
  { label: 'Asistencias hoy', value: '47' },
  { label: 'Renovaciones pendientes', value: '12' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0d1117', color: '#f9fafb' }}>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image src="/Logo.png" alt="GymShark CRM" width={150} height={45} className="object-contain" priority />
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm" style={{ color: '#9ca3af' }}>
          <a href="#features" className="hover:text-white transition-colors">Funciones</a>
          <a href="#planes" className="hover:text-white transition-colors">Planes</a>
          <a href="#stats" className="hover:text-white transition-colors">Métricas</a>
        </div>
        <Link href="/dashboard"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all"
          style={{ backgroundColor: '#dc2626' }}>
          Ir al Dashboard <ArrowRight size={15} />
        </Link>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 pt-16 pb-24 text-center">
        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest"
          style={{ backgroundColor: '#dc262615', color: '#dc2626', border: '1px solid #dc262630' }}>
          Sistema de gestión para gimnasios
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
          Gestioná tu gym<br />
          <span style={{ color: '#dc2626' }}>sin complicaciones</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: '#9ca3af' }}>
          GymShark CRM es la plataforma todo-en-uno para administrar socios, pagos, planes y asistencia.
          Todo desde un solo lugar, en tiempo real.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard"
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white text-base"
            style={{ backgroundColor: '#dc2626' }}>
            Ver demo del CRM <ArrowRight size={16} />
          </Link>
          <a href="#features"
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base"
            style={{ border: '1px solid #374151', color: '#9ca3af' }}>
            Conocer más
          </a>
        </div>
      </section>

      {/* Stats bar */}
      <section id="stats" className="py-10" style={{ backgroundColor: '#111827', borderTop: '1px solid #1f2937', borderBottom: '1px solid #1f2937' }}>
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-white mb-1">{s.value}</p>
              <p className="text-sm" style={{ color: '#6b7280' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard preview */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Vista previa del sistema</h2>
          <p style={{ color: '#9ca3af' }}>Así se ve el dashboard en acción</p>
        </div>
        <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #1f2937', backgroundColor: '#111827' }}>
          {/* Fake browser bar */}
          <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: '#0d1117', borderBottom: '1px solid #1f2937' }}>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ef4444' }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#f59e0b' }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#22c55e' }} />
            <div className="flex-1 mx-4 px-3 py-1 rounded text-xs text-center" style={{ backgroundColor: '#1f2937', color: '#6b7280' }}>
              gymsharkcrm.my.corelix.com.ar/dashboard
            </div>
          </div>
          {/* Fake dashboard content */}
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Socios', value: '190', icon: '👥', delta: '+12' },
                { label: 'Ingresos', value: '$189K', icon: '💰', delta: '+18K' },
                { label: 'Asistencia hoy', value: '47', icon: '📋', delta: '+5' },
                { label: 'Pagos pendientes', value: '8', icon: '⚠️', delta: '-2' },
              ].map((card) => (
                <div key={card.label} className="p-4 rounded-xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-lg">{card.icon}</span>
                    <span className="text-xs px-1.5 py-0.5 rounded font-medium"
                      style={{ backgroundColor: '#dc262615', color: '#dc2626' }}>{card.delta}</span>
                  </div>
                  <p className="text-xl font-bold text-white">{card.value}</p>
                  <p className="text-xs" style={{ color: '#6b7280' }}>{card.label}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl p-4" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
              <p className="text-sm font-semibold text-white mb-4">Ingresos mensuales</p>
              <div className="flex items-end gap-3 h-20">
                {[40, 55, 48, 62, 70, 85].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t"
                    style={{ height: `${h}%`, backgroundColor: i === 5 ? '#dc2626' : '#374151' }} />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs" style={{ color: '#6b7280' }}>
                {['Nov', 'Dic', 'Ene', 'Feb', 'Mar', 'Abr'].map(m => <span key={m}>{m}</span>)}
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm"
            style={{ backgroundColor: '#dc2626' }}>
            Explorar el dashboard completo <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20" style={{ backgroundColor: '#111827', borderTop: '1px solid #1f2937' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-3">Todo lo que necesitás</h2>
            <p style={{ color: '#9ca3af' }}>Módulos diseñados específicamente para la gestión de gimnasios</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="p-6 rounded-2xl"
                style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#dc262615' }}>
                  <Icon size={20} style={{ color: '#dc2626' }} />
                </div>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="planes" className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-white mb-3">Planes del gimnasio</h2>
          <p style={{ color: '#9ca3af' }}>Gestioná cada tipo de membresía con control total</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: 'Básico', price: '$55.000', members: 48, badge: '' },
            { name: 'Pro', price: '$67.500', members: 87, badge: 'Popular' },
            { name: 'Elite', price: '$87.500', members: 31, badge: '' },
            { name: 'Trimestral', price: '$19.500', members: 24, badge: '' },
          ].map((p) => (
            <div key={p.name} className="p-5 rounded-2xl text-center"
              style={{ backgroundColor: '#1f2937', border: p.name === 'Pro' ? '1px solid #dc2626' : '1px solid #374151' }}>
              {p.badge && (
                <span className="text-xs font-bold px-2 py-0.5 rounded-full inline-block mb-3"
                  style={{ backgroundColor: '#dc2626', color: 'white' }}>{p.badge}</span>
              )}
              <p className="font-bold text-white text-lg mb-1">{p.name}</p>
              <p className="text-2xl font-extrabold mb-1" style={{ color: '#dc2626' }}>{p.price}</p>
              <p className="text-xs mb-4" style={{ color: '#6b7280' }}>por mes</p>
              <div className="flex items-center justify-center gap-1.5 text-sm" style={{ color: '#9ca3af' }}>
                <Users size={13} />
                <span>{p.members} socios</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/plans" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: '#dc2626' }}>
            Ver gestión completa de planes <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#111827', borderTop: '1px solid #1f2937' }}>
        <div className="max-w-3xl mx-auto px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#f59e0b" style={{ color: '#f59e0b' }} />)}
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Empezá a usar GymShark CRM hoy</h2>
          <p className="mb-8" style={{ color: '#9ca3af' }}>
            Probá el demo completo con datos reales del sistema y descubrí cómo simplifica la gestión de tu gimnasio.
          </p>
          <Link href="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base"
            style={{ backgroundColor: '#dc2626' }}>
            <TrendingUp size={18} />
            Entrar al CRM demo
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
