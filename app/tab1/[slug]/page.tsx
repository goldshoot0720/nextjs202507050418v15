export default function Tab1Slug({ params }) {
  return (
    <>
      <h1>Tab1 Slug</h1>
      <h2>{decodeURIComponent(params.slug)}</h2>
    </>
  );
}
