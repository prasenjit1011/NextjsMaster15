import Image from "next/image";
import "../../../styles/globals.css";
import Link from "next/link";

export async function getProduct() {
  const apiUrl = 'https://dummyjson.com/products';

  try {
    const res = await fetch(apiUrl, {
      cache: 'no-store', // Disable caching for real-time SSR
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return { products: [] }; // Fallback safe value
  }
}

export default async function Home() {
  const { products } = await getProduct();
  const memoryUsage = process.memoryUsage();
  console.log('Memory Usage:::', memoryUsage);

  console.log(products);


  return (
    <div className="content">
      <h1>
        -: Dummyjson Products :- 
        <Link href="https://dummyjson.com/products" target="_blank" rel="noopener noreferrer">
          &nbsp; API
        </Link>
      </h1>
      {products.length === 0 && <p>No products available.</p>}

{products.map((product) => (
  <div key={product.id} className="prodDetails">
    <div className="prodContent">
      <h3>{product.title}</h3>
      <p>{product.description}</p>

      {product.reviews?.length > 0 && (
        <div className="reviewList">
          {product.reviews.map((review, idx) => (
            <div key={idx}>
              <p>Comment: {review.comment}</p>
              <p>By: {review.reviewerName}</p>
            </div>
          ))}
        </div>
      )}
    </div>

    <div className="prodImgList">
      {product.images?.map((src, idx) => (
        <img
          src={src}
          key={idx}
          alt={`Product ${product.title}`}
          className="prodImg"
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  </div>
))}
      
    </div>
  );
}
