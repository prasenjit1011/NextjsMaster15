// app/users/[id]/page.tsx
import { connectDB } from '@/lib/db';
import { User } from '@/models/User';
import { updateUser } from './action';

interface Props {
  params: { id: string };
}


export default async function EditUserPage({ params }: Props) {
  await connectDB();
  const user = await User.findById(params.id).lean();

  return <p>User not found</p>;
}


// export default async function EditUserPage({ params }: Props) {
//   await connectDB();
//   const user = await User.findById(params.id).lean();

//   if (!user) return <p>User not found</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">Edit User</h1>
//       <form action={updateUser} className="space-y-4">
//         <input type="hidden" name="id" value={user._id.toString()} />
//         <input
//           name="name"
//           defaultValue={user.name}
//           className="border px-2 py-1 w-full"
//           required
//         />
//         <input
//           name="email"
//           type="email"
//           defaultValue={user.email}
//           className="border px-2 py-1 w-full"
//           required
//         />
//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//           Update
//         </button>
//       </form>
//     </div>
//   );
// }
