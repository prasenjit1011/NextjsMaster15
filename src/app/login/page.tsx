"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useUser } from "@/context/ClientContext";
import Cookies from 'js-cookie';


export const saveToken = (token) => {
  Cookies.set('access_token', token, { expires: 7 }); // 7 days
};

export const getToken = () => {
  return Cookies.get('access_token');
};

export const removeToken = () => {
  Cookies.remove('access_token');
};


export default function LoginPage() {
  const [userdata, setUserdata] = useState([]);
  const { user, login, logout } = useUser();

  const logoutBtn = () => {
    Cookies.remove('access_token');
  }

  const loginBtn = () => {
    const loginData = {
      "username": "Sanjay",
      "password": "12345"
    };
    let apiUrl = "http://localhost:3000/auth/login";
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("Login successfully:", data);
      Cookies.set('access_token', data?.access_token, { expires: 7 });
      setUserdata(data);
    })
    .catch((error) => {
      console.error("Login error:", error);
    });
  }


  console.log(userdata.firstname, userdata.rndInt);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Link href="/" >
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </Link>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h1>Login Page</h1>
          {userdata.firstname} = {userdata.rndInt}
          <button type="button" onClick={loginBtn} className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              data-cy="login-button"
              width={20}
              height={20}
            />
            Login
          </button>
          <button type="button" onClick={logoutBtn} className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              data-cy="logout-button"
              width={20}
              height={20}
            />
            Logout
          </button>
          <Link href="/item" className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Item
          </Link>
        </div>

        
      </main>
      
    </div>
  );
}
