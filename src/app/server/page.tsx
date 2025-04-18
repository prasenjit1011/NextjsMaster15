import Image from "next/image";
import Empdata from "./empData";

export async function getUser() {
  const apiUrl = 'https://dummyjson.com/users';
  const res = await fetch(apiUrl);
  const data = await res.json();

  return data;
}

export default async function ServerEmployee() {
  const data = await getUser();

  return (
    <div className="content">
      <h1>Server Employee page in pages folder </h1>
      <Empdata />
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

