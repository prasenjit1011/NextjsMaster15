// app/dashboard/page.tsx
import { getUserFromToken } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const user = await getUserFromToken();

  if (!user) {
    redirect('/login');
  }
  console.log('UserData',user);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Welcome to the Dashboard</h1>
      <p className="text-lg">Hello, <strong>{user.email}</strong>!</p>
      <p>This page is protected and only accessible to authenticated users.</p>
    </div>
  );
}
