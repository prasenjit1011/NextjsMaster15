// app/page.tsx
import { getData } from '@/lib/userService';
import Link from 'next/link';
import { DeleteButton } from './delete-btn'; // Client component for delete

export default async function HomePage() {
  const users = await getData();


  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">User List:-</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user._id}>
            {user.name} - {user.email} &nbsp; 
            <Link
              href={`/users/${user._id}`}
              className="text-blue-500 underline ml-2 text-sm"
            >
              Edit
            </Link> &nbsp; 
            <DeleteButton id={user._id.toString()} />
          </li>
        ))}
      </ul>
    </div>
  );
}
