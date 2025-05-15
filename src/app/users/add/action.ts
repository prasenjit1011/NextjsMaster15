'use server';

import { connectDB } from '@/lib/db';
import { User } from '@/models/User';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createUser(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  if (!name || !email) return;

  await connectDB();
  await User.create({ name, email });

  revalidatePath('/users');
}
