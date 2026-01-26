import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function NewsDetailPage({ params }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    // 가장 가까운 notFound fallback content를 반환
    notFound();
  }

  return (
    <>
      <article className="news-article">
        <header>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
          <h1>{newsItem.title}</h1>
          <time dateTime={newsItem.date}>{newsItem.date}</time>
        </header>
        <p>{newsItem.content}</p>
      </article>
    </>
  );
}
