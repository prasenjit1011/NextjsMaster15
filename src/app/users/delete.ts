'use server';

import { connectDB } from '@/lib/db';
import { User } from '@/models/User';
import { revalidatePath } from 'next/cache';

export async function deleteUser(userId: string) {
  if (!userId) return;

  await connectDB();
  await User.findByIdAndDelete(userId);
  revalidatePath('/users'); // Refresh user list page
}
