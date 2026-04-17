import Sidebar from '@/components/Sidebar';

export default function CRMLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#111827' }}>
      <Sidebar />
      <main className="flex-1 ml-64 flex flex-col min-h-screen overflow-auto">
        {children}
      </main>
    </div>
  );
}
