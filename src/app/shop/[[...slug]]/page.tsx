// app/blog/page.tsx
import Link from "next/link";
import { cache } from "react";

// Optional: Type-safe post interface
interface Post {
  id: number;
  title: string;
  body: string;
}

// Revalidate every 60 seconds (ISR - Incremental Static Regeneration)
export const revalidate = 60;

// Cache the fetch function (recommended for shared fetches in server components)
const getPosts = cache(async (): Promise<Post[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 }, // ISR at fetch level
  });
  return res.json();
});

// app/shop/[[...slug]]/page.tsx
export default async function ShopCatchAll({ params }: { params: { slug?: string[] } }) {
    const [category, item] = params.slug || [];
    const posts = await getPosts();
  

    return (
            <main className="max-w-3xl mx-auto px-4 py-6">
                <h1 className="text-2xl font-bold mb-4">Blog List</h1>
                <ul className="space-y-4">
                    {posts.map((post) => (
                    <li key={post.id} className="border-b pb-4">
                        <h2 className="text-lg font-semibold">{post.title}</h2>
                        <p className="text-gray-700">{post.body}</p>
                        <Link
                        href={`/blog/${post.id}`}
                        className="text-blue-600 hover:underline"
                        >
                        Read more : {category}, {item}
                        </Link>
                    </li>
                    ))}
                </ul>
            </main>
        );
}
  