'use client';

import Image from "next/image";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then(res => res.json());

export default function ClientUser() {
  const apiUrl = 'https://dummyjson.com/users';
  const { data, error, isLoading } = useSWR(apiUrl, fetcher);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div className="content">
      <h1>Client User page in pages folder </h1>
      <div style={{padding:'10px' }}>
        {
          data?.users &&
          data?.users.map((val, key)=>{

            if(key>10)
              return;
            else
              return (
                <span key={val.id} ><div>{key+1}. {val.firstName}</div></span>
              );
          })
        }
      </div>
    </div>
  );
}
