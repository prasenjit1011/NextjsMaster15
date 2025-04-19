// app/userinfo/page.tsx
import { cookies } from 'next/headers';
import UserInfo from './UserInfo';

export default async function UserInfoPage() {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  // Example: Fetch from backend
  const res = await fetch('https://dummyjson.com/users', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });
  const user = await res.json();

  return <UserInfo user={user} />;
}
