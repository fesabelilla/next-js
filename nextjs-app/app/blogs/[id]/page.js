import NotFound from "./not-found";

export default async function BlogPage({ params }) {
  const { id } = await params;

  if (id === 3) {
    NotFound();
  }

  return <div className="mt-6">This is blog page {id}</div>;
}
