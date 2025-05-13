"use client";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/ClientContext";
import { useEffect, useLayoutEffect } from "react";


export default function Home() {
  const router = useRouter();
  const { user, login, logout } = useUser();

  useEffect(() => {
    if (user === null) {
      router.push("/client/login");
    }
  }, [user, router]);

  if (user === undefined || user === null) {
    // Still loading user context
    return <p>Loading...</p>;
  }
  
  console.log(user)
  
  return (
    <div style={{backgroundColor:'#FFF', color:'#000', padding:'20px'}}>
      <h1><u>Client Dashboard Page 5555</u></h1>
      <h1>Welcome Customer Dashboard {user ? user.name : "Guest"}</h1>
      <button type="submit" onClick={logout} className="btnA">Logout Btn1</button>
    </div>
  );
}
