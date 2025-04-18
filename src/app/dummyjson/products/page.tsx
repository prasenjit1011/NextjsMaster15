import Image from "next/image";
import "../../../styles/globals.css"
import Link from "next/link";


export async function getProduct() {
  const apiUrl = 'https://dummyjson.com/products';
  const res = await fetch(apiUrl);
  const data = await res.json();
  
  return data;
}




export default async function Home() {
  console.clear();
  const data = await getProduct();
  return (
    <div className="content">
      <h1>
        -: Dummyjson Products :- 
        <Link href="https://dummyjson.com/products" target="_blank">
          &nbsp; Api
        </Link>
      </h1>
      {
        
        data.products.map((val, key) => {
          return (
            <div key={key} className="prodDetails">
              <div className="prodContent">
                <h3>{val.title}</h3>
                <p>{val.description}</p>
                <div className="reviewList">
                {
                  val.reviews.map((review, key1) => {
                    return (<div key={key1}>
                      <p>Comment : {review.comment}</p>
                      <p>By : {review.reviewerName}</p>
                      <p></p>
                    </div>)
                  })
                }
                </div>
              </div>
              <div className="prodImgList">
                {
                  val.images.map((imgSrc, key3)=>{
                    return <img src={imgSrc} className="prodImg" key={key3} />
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  );
}
