import { cookies } from "next/headers";
import ClientWrapper from "./ClientWrapper";

// ✅ This is a Server Component
export default function HomePage() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value || null;

  // Fake server-side user decode from token
  const user = token
    ? { name: "Prasenjit", email: "you@example.com" }
    : null;


    return (
      <div style={{backgroundColor:'#FFF', color:'#000', padding:'20px'}}>
        <h1><u>Server Page</u></h1>
      </div>
    );
}
