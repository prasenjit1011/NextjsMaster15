"use client";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/ClientContext";
import { useEffect } from "react";


export default function Home() {
  const router = useRouter();
  const { user, login, logout } = useUser();
  useEffect(() => {
    if (!user) {
      router.push("/client/login");
    }
  }, [user, router])
  
  
  return (
    <div style={{backgroundColor:'#FFF', color:'#000', padding:'20px'}}>
      <h1><u>Client Dashboard Page</u></h1>
      <h1>Welcome Customer Dashboard {user ? user.name : "Guest"}</h1>
      <button type="submit" onClick={logout} className="btnA">Logout Btn1</button>
    </div>
  );
}
