import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <div>This is News Page</div>
      <ul>
        <li>
          <Link href="/news/first-news">First News Item</Link>
        </li>
        <li>
          <Link href="/news/second-news">Second News Item</Link>
        </li>
        <li>
          <Link href="/news/third-news">Third News Item</Link>
        </li>
      </ul>
    </>
  );
}
