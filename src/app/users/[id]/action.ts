'use server';

import { connectDB } from '@/lib/db';
import { User } from '@/models/User';
import { redirect } from 'next/navigation';

export async function updateUser(formData: FormData) {
  const id = formData.get('id') as string;
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  if (!id || !name || !email) return;

  await connectDB();
  await User.findByIdAndUpdate(id, { name, email });

  redirect('/users');
}
