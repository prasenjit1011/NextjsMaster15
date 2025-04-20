// app/page.tsx (Server Component)
import { login, logout } from './auth'; // Import the server actions
import { cookies } from 'next/headers';

export default async function HomePage() {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value || null;

  const userLogin = async () => {
    await login();  // Server action to login (set the cookie)
    // Redirect or refresh logic here
    // Since Server Actions are asynchronous, handle the state accordingly
    return new Response('Logged In', { status: 200 });
  };

  const userLogout = async () => {
    await logout();  // Server action to logout (delete the cookie)
    // Redirect or refresh logic here
    return new Response('Logged Out', { status: 200 });
  };

  return (
    <div style={{ backgroundColor: "#FFF", color: "#000", padding: "20px" }}>
      <h1><u>Server Login Page : {token || "Guest"}</u></h1>
      {token ? (
        <button onClick={userLogout} className="btnA">
          Logout
        </button>
      ) : (
        <button onClick={userLogin} className="btnA">
          Login
        </button>
      )}
    </div>
  );
}
