import BottomNav from '@/components/layouts/BottomNav';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pb-20 max-w-md mx-auto relative shadow-lg">
      <main className="p-4">{children}</main>
      <BottomNav />
    </div>
  );
}