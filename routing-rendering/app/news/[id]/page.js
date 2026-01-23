export default function NewsDetailPage({ params }) {
  const newsId = params.id;
  return (
    <>
      <div>This is News Detail Page</div>
      <p>News ID: {newsId}</p>
    </>
  );
}
