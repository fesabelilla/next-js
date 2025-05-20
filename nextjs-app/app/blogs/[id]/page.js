import { notFound } from "next/navigation";

export default async function BlogPage({ params }) {
  const { id } = await params;

  if (id === "3") {
    notFound();
  }

  return <div className="mt-6">This is blog page {id}</div>;
}
