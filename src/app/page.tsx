'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import {
  Users, CreditCard, ClipboardList, Dumbbell, BarChart3,
  ArrowRight, Zap, TrendingUp, Shield, Star, FlaskConical,
  Building2, Phone, Mail, CheckCircle, Send,
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
  const [form, setForm] = useState({ gym: '', name: '', email: '', phone: '', plan: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

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
          <a href="#solicitar" className="hover:text-white transition-colors">Solicitar acceso</a>
        </div>
        <Link href="/dashboard"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all"
          style={{ backgroundColor: '#dc2626' }}>
          Ver demo <ArrowRight size={15} />
        </Link>
      </nav>

      {/* Demo notice bar */}
      <div className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono"
        style={{ backgroundColor: '#1a1200', borderBottom: '1px solid #f59e0b25' }}>
        <FlaskConical size={13} style={{ color: '#f59e0b' }} />
        <span style={{ color: '#f59e0b' }} className="font-semibold uppercase tracking-wider">Entorno de demostración</span>
        <span className="hidden sm:inline" style={{ color: 'rgba(245,158,11,0.5)' }}>
          — Los datos mostrados son de ejemplo. Para activar tu cuenta real,
        </span>
        <a href="#solicitar" className="hidden sm:inline font-semibold underline underline-offset-2"
          style={{ color: '#f59e0b' }}>solicitá acceso acá.</a>
      </div>

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

      {/* Solicitar acceso */}
      <section id="solicitar" className="py-24" style={{ backgroundColor: '#0d1117', borderTop: '1px solid #1f2937' }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: info */}
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest"
                style={{ backgroundColor: '#dc262615', color: '#dc2626', border: '1px solid #dc262630' }}>
                <FlaskConical size={12} /> Demo activa
              </span>
              <h2 className="text-4xl font-extrabold text-white leading-tight mb-5">
                ¿Querés activar<br />
                <span style={{ color: '#dc2626' }}>tu cuenta real?</span>
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#9ca3af' }}>
                Lo que estás viendo es una versión demo con datos de ejemplo. Si querés que activemos
                GymShark CRM para tu gimnasio con tus datos reales, completá el formulario y nos contactamos.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  'Carga inicial de todos tus socios',
                  'Configuración de tus planes y precios',
                  'Dominio propio en corelix.com.ar',
                  'Soporte técnico incluido',
                  'Panel listo en menos de 48 horas',
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={16} style={{ color: '#22c55e' }} className="flex-shrink-0" />
                    <span className="text-sm" style={{ color: '#d1d5db' }}>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#6b7280' }}>Contacto directo</p>
                <a href="mailto:e-aguirre@corelix.com.ar"
                  className="flex items-center gap-2 text-sm font-medium mb-2"
                  style={{ color: '#dc2626' }}>
                  <Mail size={14} /> e-aguirre@corelix.com.ar
                </a>
                <p className="text-xs font-mono" style={{ color: '#4b5563' }}>my.corelix.com.ar</p>
              </div>
            </div>

            {/* Right: form */}
            <div className="p-8 rounded-3xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: '#22c55e20' }}>
                    <CheckCircle size={32} style={{ color: '#22c55e' }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">¡Solicitud enviada!</h3>
                  <p className="text-sm" style={{ color: '#9ca3af' }}>
                    Nos contactaremos con vos en las próximas 24 horas para activar tu cuenta.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Solicitar acceso</h3>
                    <p className="text-xs" style={{ color: '#6b7280' }}>Completá el formulario y te activamos el sistema</p>
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: '#9ca3af' }}>
                      <Building2 size={11} className="inline mr-1" />Nombre del gimnasio *
                    </label>
                    <input required type="text" placeholder="Ej: Iron Gym Palermo"
                      value={form.gym} onChange={e => setForm({ ...form, gym: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-colors"
                      style={{ backgroundColor: '#111827', border: '1px solid #374151' }} />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: '#9ca3af' }}>
                        <Users size={11} className="inline mr-1" />Tu nombre *
                      </label>
                      <input required type="text" placeholder="Juan García"
                        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none"
                        style={{ backgroundColor: '#111827', border: '1px solid #374151' }} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: '#9ca3af' }}>
                        <Phone size={11} className="inline mr-1" />Teléfono *
                      </label>
                      <input required type="tel" placeholder="11-1234-5678"
                        value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none"
                        style={{ backgroundColor: '#111827', border: '1px solid #374151' }} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: '#9ca3af' }}>
                      <Mail size={11} className="inline mr-1" />Email *
                    </label>
                    <input required type="email" placeholder="juan@migimnasio.com"
                      value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none"
                      style={{ backgroundColor: '#111827', border: '1px solid #374151' }} />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: '#9ca3af' }}>
                      Cantidad aproximada de socios
                    </label>
                    <select value={form.plan} onChange={e => setForm({ ...form, plan: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none"
                      style={{ backgroundColor: '#111827', border: '1px solid #374151' }}>
                      <option value="">Seleccioná una opción</option>
                      <option value="menos50">Menos de 50 socios</option>
                      <option value="50-150">50 a 150 socios</option>
                      <option value="150-300">150 a 300 socios</option>
                      <option value="mas300">Más de 300 socios</option>
                    </select>
                  </div>

                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white text-sm transition-all"
                    style={{ backgroundColor: '#dc2626' }}>
                    <Send size={15} />
                    Solicitar activación de cuenta
                  </button>

                  <p className="text-xs text-center" style={{ color: '#4b5563' }}>
                    Te respondemos en menos de 24 horas hábiles.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
