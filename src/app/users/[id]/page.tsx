// app/users/[id]/page.tsx
import { connectDB } from '@/lib/db';
import { User } from '@/models/User';
import { updateUser } from './action';
import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
  params: { id: string };
}

export default async function EditUserPage({ params }: Props) {
  await connectDB();

  const user = await User.findById(params.id).lean();

  if (!user) return notFound(); // Better than returning a <p>

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Edit User</h1>
      <form action={updateUser} className="space-y-4">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
}
