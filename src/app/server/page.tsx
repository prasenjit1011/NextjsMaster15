import { cookies } from "next/headers";
import ClientWrapper from "./ClientWrapper";

// ✅ This is a Server Component
export default async function HomePage({users}) {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value || null;
  const res   = await fetch('https://dummyjson.com/users');
  const data  = await res.json();

  // Fake server-side user decode from token
  const user = token
    ? { name: "Prasenjit", email: "you@example.com" }
    : null;


    return (
      <div style={{backgroundColor:'#FFF', color:'#000', padding:'20px'}}>
        <h1><u>Server Page</u></h1>
        <br />
        <ul>
          <li><b>------------------ Serverside User List ------------------</b></li>
          {data.users.map((user) => (
            <li key={user.id}>
              {user.firstName} {user.lastName} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    );
}
