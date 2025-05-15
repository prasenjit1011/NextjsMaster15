// app/page.tsx
import { getData } from '@/lib/userService';

export default async function HomePage() {
  const users = await getData();

  console.log('userlist : ', users)

  return (
    <main>
      <h1 className="text-2xl font-bold">User Listing</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user._id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </main>
  );
}
