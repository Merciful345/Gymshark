'use client';

import Header from '@/components/Header';
import { Zap, Bell, Shield, Palette, Building2 } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="flex flex-col flex-1">
      <Header title="Configuración" subtitle="Ajustes del sistema GymShark CRM" />

      <div className="flex-1 p-6 space-y-6 max-w-2xl">

        {[
          {
            icon: Building2, title: 'Datos del gimnasio', fields: [
              { label: 'Nombre del gimnasio', value: 'GymShark', type: 'text' },
              { label: 'Dirección', value: 'Av. Corrientes 1234, CABA', type: 'text' },
              { label: 'Teléfono', value: '11-4567-8901', type: 'tel' },
            ]
          },
          {
            icon: Bell, title: 'Notificaciones', fields: [
              { label: 'Email de alertas', value: 'admin@gymshark.com', type: 'email' },
              { label: 'Días antes de vencimiento para alertar', value: '5', type: 'number' },
            ]
          },
          {
            icon: Shield, title: 'Seguridad', fields: [
              { label: 'Email de acceso', value: 'admin@gymshark.com', type: 'email' },
              { label: 'Nueva contraseña', value: '', type: 'password', placeholder: '••••••••' },
            ]
          },
        ].map(({ icon: Icon, title, fields }) => (
          <div key={title} className="p-5 rounded-2xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
            <div className="flex items-center gap-2 mb-5">
              <Icon size={16} style={{ color: '#dc2626' }} />
              <p className="font-semibold text-white">{title}</p>
            </div>
            <div className="space-y-4">
              {fields.map(f => (
                <div key={f.label}>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: '#9ca3af' }}>{f.label}</label>
                  <input type={f.type} defaultValue={f.value} placeholder={(f as { placeholder?: string }).placeholder}
                    className="w-full px-3 py-2.5 rounded-xl text-sm text-white outline-none"
                    style={{ backgroundColor: '#111827', border: '1px solid #374151' }} />
                </div>
              ))}
            </div>
            <button className="mt-4 px-4 py-2 rounded-xl text-sm font-semibold text-white"
              style={{ backgroundColor: '#dc2626' }}>
              Guardar cambios
            </button>
          </div>
        ))}

        {/* Branding */}
        <div className="p-5 rounded-2xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
          <div className="flex items-center gap-2 mb-5">
            <Palette size={16} style={{ color: '#dc2626' }} />
            <p className="font-semibold text-white">Branding</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
              style={{ backgroundColor: '#dc262620', border: '2px dashed #dc262640' }}>
              <Zap fill="#dc2626" style={{ color: '#dc2626' }} size={24} />
            </div>
            <div>
              <p className="text-sm text-white font-medium">Logo del gimnasio</p>
              <p className="text-xs mt-0.5" style={{ color: '#6b7280' }}>PNG, JPG hasta 2MB</p>
              <button className="mt-2 text-xs px-3 py-1.5 rounded-lg font-medium"
                style={{ backgroundColor: '#374151', color: '#9ca3af' }}>
                Subir logo
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
