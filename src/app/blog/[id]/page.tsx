import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
}

// ✅ Incremental Static Regeneration at fetch level
export default async function Page({ params }: { params: { id: string } }) {
  const post: Post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    {
      next: { revalidate: 60 }, // ISR: revalidate this post every 60s
    }
  ).then((res) => res.json());

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
      <Link
        href={`/blog`}
        className="text-blue-600 hover:underline"
      >
        Read more
      </Link>
    </main>
  );
}
