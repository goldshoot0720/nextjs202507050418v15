export default async function Tab1Slug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <h1>Tab1 Slug</h1>
      <h2>{decodeURIComponent(slug)}</h2>
    </>
  );
}
