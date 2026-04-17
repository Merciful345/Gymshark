export type MemberStatus = 'activo' | 'vencido' | 'pendiente';
export type PaymentStatus = 'pagado' | 'pendiente' | 'vencido';

export interface Member {
  id: number;
  name: string;
  email: string;
  phone: string;
  plan: string;
  status: MemberStatus;
  joinDate: string;
  expiryDate: string;
  avatar: string;
  attended: number;
}

export interface Payment {
  id: number;
  memberId: number;
  memberName: string;
  plan: string;
  amount: number;
  date: string;
  status: PaymentStatus;
  method: string;
}

export interface AttendanceRecord {
  id: number;
  memberId: number;
  memberName: string;
  date: string;
  time: string;
  plan: string;
}

export interface Plan {
  id: number;
  name: string;
  price: number;
  duration: string;
  features: string[];
  members: number;
  color: string;
}

export const plans: Plan[] = [
  {
    id: 1, name: 'Básico', price: 55000, duration: '1 mes',
    features: ['Acceso sala de pesas', 'Horario estándar (8-20h)', 'Casillero incluido'],
    members: 48, color: '#6b7280',
  },
  {
    id: 2, name: 'Pro', price: 67500, duration: '1 mes',
    features: ['Todo lo del Básico', 'Clases grupales', 'Acceso 6-22h', '1 evaluación física/mes'],
    members: 87, color: '#dc2626',
  },
  {
    id: 3, name: 'Elite', price: 87500, duration: '1 mes',
    features: ['Todo lo del Pro', 'Personal trainer (2x/sem)', 'Nutricionista online', 'Acceso 24/7'],
    members: 31, color: '#f59e0b',
  },
  {
    id: 4, name: 'Trimestral Pro', price: 19500, duration: '3 meses',
    features: ['Todo lo del Pro', 'Ahorro 10%', 'Freeze 1 semana/trimestre'],
    members: 24, color: '#8b5cf6',
  },
];

export const members: Member[] = [
  { id: 1, name: 'Lucas Martínez', email: 'lucas@mail.com', phone: '11-4523-7890', plan: 'Pro', status: 'activo', joinDate: '2024-01-15', expiryDate: '2026-05-15', avatar: 'LM', attended: 18 },
  { id: 2, name: 'Valentina Torres', email: 'vale@mail.com', phone: '11-6234-5678', plan: 'Elite', status: 'activo', joinDate: '2023-11-01', expiryDate: '2026-05-01', avatar: 'VT', attended: 22 },
  { id: 3, name: 'Matías Fernández', email: 'mati@mail.com', phone: '11-7890-1234', plan: 'Básico', status: 'vencido', joinDate: '2023-08-20', expiryDate: '2026-04-01', avatar: 'MF', attended: 5 },
  { id: 4, name: 'Sofía Rodríguez', email: 'sofi@mail.com', phone: '11-3456-7890', plan: 'Pro', status: 'activo', joinDate: '2024-03-10', expiryDate: '2026-05-10', avatar: 'SR', attended: 14 },
  { id: 5, name: 'Nicolás López', email: 'nico@mail.com', phone: '11-9012-3456', plan: 'Trimestral Pro', status: 'activo', joinDate: '2024-02-01', expiryDate: '2026-05-01', avatar: 'NL', attended: 27 },
  { id: 6, name: 'Camila García', email: 'cami@mail.com', phone: '11-5678-9012', plan: 'Elite', status: 'pendiente', joinDate: '2024-04-01', expiryDate: '2026-05-01', avatar: 'CG', attended: 9 },
  { id: 7, name: 'Agustín Pérez', email: 'agus@mail.com', phone: '11-2345-6789', plan: 'Básico', status: 'activo', joinDate: '2024-01-01', expiryDate: '2026-05-01', avatar: 'AP', attended: 11 },
  { id: 8, name: 'Julieta Sánchez', email: 'juli@mail.com', phone: '11-8901-2345', plan: 'Pro', status: 'vencido', joinDate: '2023-12-15', expiryDate: '2026-04-15', avatar: 'JS', attended: 2 },
  { id: 9, name: 'Tomás González', email: 'tomas@mail.com', phone: '11-4567-8901', plan: 'Pro', status: 'activo', joinDate: '2024-02-20', expiryDate: '2026-05-20', avatar: 'TG', attended: 19 },
  { id: 10, name: 'Luciana Díaz', email: 'luci@mail.com', phone: '11-0123-4567', plan: 'Elite', status: 'activo', joinDate: '2023-10-05', expiryDate: '2026-05-05', avatar: 'LD', attended: 25 },
];

export const payments: Payment[] = [
  { id: 1, memberId: 1, memberName: 'Lucas Martínez', plan: 'Pro', amount: 7200, date: '2026-04-15', status: 'pagado', method: 'Transferencia' },
  { id: 2, memberId: 2, memberName: 'Valentina Torres', plan: 'Elite', amount: 11000, date: '2026-04-14', status: 'pagado', method: 'Tarjeta' },
  { id: 3, memberId: 3, memberName: 'Matías Fernández', plan: 'Básico', amount: 4500, date: '2026-04-01', status: 'vencido', method: 'Efectivo' },
  { id: 4, memberId: 4, memberName: 'Sofía Rodríguez', plan: 'Pro', amount: 7200, date: '2026-04-13', status: 'pagado', method: 'Transferencia' },
  { id: 5, memberId: 5, memberName: 'Nicolás López', plan: 'Trimestral Pro', amount: 19500, date: '2026-04-10', status: 'pagado', method: 'Tarjeta' },
  { id: 6, memberId: 6, memberName: 'Camila García', plan: 'Elite', amount: 11000, date: '2026-04-16', status: 'pendiente', method: 'Transferencia' },
  { id: 7, memberId: 7, memberName: 'Agustín Pérez', plan: 'Básico', amount: 4500, date: '2026-04-12', status: 'pagado', method: 'Efectivo' },
  { id: 8, memberId: 8, memberName: 'Julieta Sánchez', plan: 'Pro', amount: 7200, date: '2026-03-15', status: 'vencido', method: 'Transferencia' },
  { id: 9, memberId: 9, memberName: 'Tomás González', plan: 'Pro', amount: 7200, date: '2026-04-16', status: 'pagado', method: 'Tarjeta' },
  { id: 10, memberId: 10, memberName: 'Luciana Díaz', plan: 'Elite', amount: 11000, date: '2026-04-11', status: 'pagado', method: 'Transferencia' },
];

export const attendanceToday: AttendanceRecord[] = [
  { id: 1, memberId: 1, memberName: 'Lucas Martínez', date: '2026-04-16', time: '07:15', plan: 'Pro' },
  { id: 2, memberId: 2, memberName: 'Valentina Torres', date: '2026-04-16', time: '08:30', plan: 'Elite' },
  { id: 3, memberId: 5, memberName: 'Nicolás López', date: '2026-04-16', time: '09:00', plan: 'Trimestral Pro' },
  { id: 4, memberId: 9, memberName: 'Tomás González', date: '2026-04-16', time: '09:45', plan: 'Pro' },
  { id: 5, memberId: 10, memberName: 'Luciana Díaz', date: '2026-04-16', time: '10:20', plan: 'Elite' },
  { id: 6, memberId: 4, memberName: 'Sofía Rodríguez', date: '2026-04-16', time: '11:00', plan: 'Pro' },
  { id: 7, memberId: 7, memberName: 'Agustín Pérez', date: '2026-04-16', time: '17:30', plan: 'Básico' },
];

export const monthlyRevenue = [
  { month: 'Nov', revenue: 142000 },
  { month: 'Dic', revenue: 158000 },
  { month: 'Ene', revenue: 167000 },
  { month: 'Feb', revenue: 154000 },
  { month: 'Mar', revenue: 171000 },
  { month: 'Abr', revenue: 189000 },
];

export const memberGrowth = [
  { month: 'Nov', members: 142 },
  { month: 'Dic', members: 149 },
  { month: 'Ene', members: 161 },
  { month: 'Feb', members: 168 },
  { month: 'Mar', members: 178 },
  { month: 'Abr', members: 190 },
];

export const weeklyAttendance = [
  { day: 'Lun', count: 34 },
  { day: 'Mar', count: 28 },
  { day: 'Mié', count: 41 },
  { day: 'Jue', count: 37 },
  { day: 'Vie', count: 45 },
  { day: 'Sáb', count: 52 },
  { day: 'Dom', count: 18 },
];
