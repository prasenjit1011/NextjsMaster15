// This page will be statically generated at build time

type Props = {
    params: {
      id: string;
    };
  };
  
export default function ProductPage({ params }: Props) {
    return <h1>Product ID: {params.id}</h1>;
}

// Pre-generates static pages for these IDs
export async function generateStaticParams() {
    const ids = ['1', '2', '3'];
    return ids.map((id) => ({ id }));
}
  