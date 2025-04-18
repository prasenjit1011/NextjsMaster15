'use client'
import Image from "next/image";
import "../../../styles/globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";

async function getProduct() {
  const apiUrl = "https://dummyjson.com/products";
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return { products: [] }; // Return empty array if error occurs
  }
}

export default function Home() {
  const [data, setData] = useState({ products: [] });
  const [isLoading, setIsLoading] = useState(true);
  
  //const memoryUsage = process.memoryUsage();
  //console.log('Memory Usage::::', memoryUsage);


  // Fetch data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      const productData = await getProduct();
      setData(productData);
      setIsLoading(false);
    };

    fetchData();

    // Cleanup function (to prevent memory leaks)
    return () => {
      // Optional cleanup code if needed, like clearing intervals or cancelling ongoing async tasks
      console.clear();
    };
  }, []); // Empty dependency array ensures this runs once on mount

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content">
      <h1>
        -: Dummyjson Products :-
        <Link href="https://dummyjson.com/products" target="_blank">
          &nbsp; Api
        </Link>
      </h1>
      {data.products.map((val, key) => {
        return (
          <div key={key} className="prodDetails">
            <div className="prodContent">
              <h3>{val.title}</h3>
              <p>{val.description}</p>
              <div className="reviewList">
                {val.reviews.map((review, key1) => {
                  return (
                    <div key={key1}>
                      <p>Comment : {review.comment}</p>
                      <p>By : {review.reviewerName}</p>
                      <p></p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="prodImgList">
              {val.images.map((imgSrc, key3) => {
                return (
                  <img
                    src={imgSrc}
                    className="prodImg"
                    key={key3}
                    alt={`Product Image ${key3}`}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
