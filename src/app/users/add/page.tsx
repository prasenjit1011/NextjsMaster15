// app/users/new/page.tsx
import { createUser } from './action';

export default function CreateUserPage() {
  return (
    <>
      <h1 className="text-xl font-bold mb-4">Create New User</h1>
      <form action={createUser} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          className="border px-2 py-1 w-full"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border px-2 py-1 w-full"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Create
        </button>
      </form>
    </>
  );
}
