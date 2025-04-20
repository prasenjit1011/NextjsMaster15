"use client";
import { useUser } from "@/context/ServerContext";
import Cookies from 'js-cookie';


export default function Home() {
  const { user, setUser } = useUser();

  const userData = () => {

    if(user){
      Cookies.remove('token');
      setUser(null)
    }
    else{
      Cookies.set('token', 'dark', { expires: 7 });
      setUser({ name: "Prasenjit", email: "you@example.com" })
    }    
  }

  return (
    <div>
      <h1>ServerHello456 {user ? user.name : "Guest"} 👋</h1>
      {user ? (
        <button onClick={userData}>Logout</button>
      ) : (
        <button
          onClick={userData}
        >
          Login
        </button>
      )}
    </div>
  );
}
