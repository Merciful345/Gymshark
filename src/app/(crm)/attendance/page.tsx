'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { attendanceToday, members, weeklyAttendance } from '@/lib/mockData';
import { CheckCircle, Clock, Search, UserCheck, TrendingUp, Users, QrCode } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AttendancePage() {
  const [search, setSearch] = useState('');
  const [checkedIn, setCheckedIn] = useState<number[]>(attendanceToday.map(a => a.memberId));
  const [registerSearch, setRegisterSearch] = useState('');

  const filteredAttendance = attendanceToday.filter(a =>
    a.memberName.toLowerCase().includes(search.toLowerCase())
  );

  const filteredMembers = members.filter(m =>
    registerSearch.length > 0 &&
    m.name.toLowerCase().includes(registerSearch.toLowerCase()) &&
    !checkedIn.includes(m.id)
  );

  const handleCheckIn = (memberId: number) => {
    setCheckedIn(prev => [...prev, memberId]);
    setRegisterSearch('');
  };

  return (
    <div className="flex flex-col flex-1">
      <Header title="Asistencia" subtitle="Control de entrada al gimnasio" />

      <div className="flex-1 p-6 space-y-6">

        {/* Summary */}
        <div className="grid grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
            <UserCheck size={20} style={{ color: '#22c55e' }} className="mb-3" />
            <p className="text-3xl font-bold text-white">{checkedIn.length}</p>
            <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>Presentes hoy</p>
          </div>
          <div className="p-5 rounded-2xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
            <Users size={20} style={{ color: '#3b82f6' }} className="mb-3" />
            <p className="text-3xl font-bold text-white">{members.filter(m => m.status === 'activo').length}</p>
            <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>Socios activos</p>
          </div>
          <div className="p-5 rounded-2xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
            <TrendingUp size={20} style={{ color: '#dc2626' }} className="mb-3" />
            <p className="text-3xl font-bold text-white">
              {Math.round((checkedIn.length / members.filter(m => m.status === 'activo').length) * 100)}%
            </p>
            <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>Tasa de asistencia</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Register check-in */}
          <div className="p-5 rounded-2xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
            <div className="flex items-center gap-2 mb-4">
              <QrCode size={18} style={{ color: '#dc2626' }} />
              <p className="font-semibold text-white">Registrar entrada</p>
            </div>
            <div className="relative">
              <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl mb-2"
                style={{ backgroundColor: '#111827', border: '1px solid #374151' }}>
                <Search size={14} style={{ color: '#6b7280' }} />
                <input
                  type="text"
                  placeholder="Buscar socio..."
                  value={registerSearch}
                  onChange={e => setRegisterSearch(e.target.value)}
                  className="flex-1 bg-transparent text-sm outline-none text-white placeholder:text-gray-500"
                />
              </div>
              {filteredMembers.length > 0 && (
                <div className="absolute z-10 w-full rounded-xl overflow-hidden shadow-xl"
                  style={{ backgroundColor: '#0d1117', border: '1px solid #374151' }}>
                  {filteredMembers.slice(0, 5).map(m => (
                    <button key={m.id} onClick={() => handleCheckIn(m.id)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 text-left transition-colors"
                      style={{ borderBottom: '1px solid #1f2937' }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1f2937')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                        style={{ backgroundColor: '#dc262620', color: '#dc2626' }}>
                        {m.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white truncate">{m.name}</p>
                        <p className="text-xs" style={{ color: '#6b7280' }}>{m.plan}</p>
                      </div>
                      <CheckCircle size={14} style={{ color: '#22c55e' }} />
                    </button>
                  ))}
                </div>
              )}
            </div>
            <p className="text-xs mt-3" style={{ color: '#6b7280' }}>
              Escribí el nombre del socio para registrar su entrada
            </p>

            {/* Recently checked in */}
            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#6b7280' }}>
                Últimas entradas
              </p>
              <div className="space-y-2">
                {attendanceToday.slice(-4).reverse().map(a => (
                  <div key={a.id} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={13} style={{ color: '#22c55e' }} />
                    <span className="flex-1 text-white truncate">{a.memberName}</span>
                    <span style={{ color: '#6b7280' }}>{a.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Today's list */}
          <div className="lg:col-span-2 p-5 rounded-2xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
            <div className="flex items-center gap-3 mb-4">
              <p className="font-semibold text-white flex-1">Registros de hoy</p>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                style={{ backgroundColor: '#111827', border: '1px solid #374151' }}>
                <Search size={13} style={{ color: '#6b7280' }} />
                <input type="text" placeholder="Filtrar..."
                  value={search} onChange={e => setSearch(e.target.value)}
                  className="bg-transparent text-sm outline-none text-white placeholder:text-gray-500 w-28" />
              </div>
            </div>
            <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
              {filteredAttendance.map(a => (
                <div key={a.id} className="flex items-center gap-3 p-3 rounded-xl"
                  style={{ backgroundColor: '#111827', border: '1px solid #374151' }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: '#dc262620', color: '#dc2626' }}>
                    {a.memberName.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">{a.memberName}</p>
                    <p className="text-xs" style={{ color: '#6b7280' }}>{a.plan}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="flex items-center gap-1 text-xs" style={{ color: '#9ca3af' }}>
                      <Clock size={11} />
                      {a.time}
                    </div>
                    <span className="text-xs font-medium" style={{ color: '#22c55e' }}>Ingresó</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weekly chart */}
        <div className="p-5 rounded-2xl" style={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}>
          <p className="font-semibold text-white mb-5">Asistencia por día de la semana</p>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={weeklyAttendance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="day" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: 8 }}
                labelStyle={{ color: '#f9fafb' }}
                formatter={(v) => [v, 'Asistencias']}
              />
              <Bar dataKey="count" fill="#dc2626" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs mt-3 text-center" style={{ color: '#6b7280' }}>
            Pico máximo: Sábado con 52 asistencias
          </p>
        </div>

      </div>
    </div>
  );
}
