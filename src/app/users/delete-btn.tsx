'use client';

import { deleteUser } from './delete';
import { useTransition } from 'react';

export function DeleteButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => {
        const confirmed = confirm('Are you sure you want to delete this user?');
        if (!confirmed) return;

        startTransition(() => deleteUser(id));
      }}
      className="text-red-600 underline text-sm disabled:opacity-50 cursor-pointer"
      disabled={isPending}
    >
      {isPending ? 'Deleting...' : 'Delete'}
    </button>
  );
}
