import Image from "next/image";

export default function SiteTitle(){
    return (
        <div style={{width:'400px', backgroundColor:'#456', float:'left'}}>
          <h2>NextJS Master Project....</h2>
          <Image
            src={"https://fastly.picsum.photos/id/78/200/200.jpg?hmac=P2qNtvmWActric-MfeYNdsN7YuChCioX-9CkJMNUYpk"}
            alt="Next.js Logo"
            width={400}
            height={50}
            style={{ height: "50px", width: "400px", objectFit: "cover" }}
            priority
          />
        </div>
    );
}