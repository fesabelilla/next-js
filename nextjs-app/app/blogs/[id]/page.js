export default async function BlogPage({ params }) {
  const { id } = await params;
  return <div className="mt-6">This is blog page {id}</div>;
}
