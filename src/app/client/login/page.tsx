"use client";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/ClientContext";


export default function Home() {
  const router = useRouter();
  const { user, login, logout } = useUser();

  if(user){
    router.push('/client/dashboard');
  }

  return (
    <div style={{backgroundColor:'#FFF', color:'#000', padding:'20px'}}>
      <h1><u>Client Login Page</u></h1>    
      <h1>Welcome Client Side : {user ? user.name : "Guest"}</h1>
      <button
          type="submit"
          onClick={() =>
            login({ name: "Prasenjit", email: "you@example.com" })
          }
          className="btnA"
        >
          Login2
        </button>  
    </div>
  );
}
