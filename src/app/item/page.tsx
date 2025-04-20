"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUser } from "@/context/ClientContext";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

export default function Home() {
  const { user, login, logout } = useUser();
  const [itemList, setItem] = useState([]);
  const router = useRouter();

  if(user){
    console.log('Cookie access_token : ', user?.access_token);
  }

  useEffect(()=>{
    let apiUrl = 'http://localhost:3000/items';
    let access_token =  Cookies.get('access_token');
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+access_token
      },
      //body: JSON.stringify(loginData),
    })
    .then(async (res) => {
      const status = res.status;
      const data = await res.json();
  
      console.log("Status Code:", status);
      if (status === 200) {
        setItem(data);
      } else {
        router.push('/');
        console.warn("Non-200 response", data);
      }
    })
    .catch((error) => {
      console.error("Login error:", error);
    });
  },[])



  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Link href="/">
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
          <h1>Item Listing Page</h1>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          
          <table>
            <tbody>
              {
                itemList && itemList.map((item, key)=>{
                  return (<tr key={key}><td><h1 style={{color:'#F00'}}>{item.name}</h1></td></tr>)
                })
                
              }
            </tbody>
          </table>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          
          <Link href="/" className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Login Now
          </Link>
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
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/item/add"
          >
            Add Item
          </Link>
        </div>
      </main>
      
    </div>
  );
}
