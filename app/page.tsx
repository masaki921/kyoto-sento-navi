// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="py-12 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">京の湯ナビ</h1>
      <p className="text-lg mb-8">京都の銭湯を検索・発見するウェブサイト</p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">おすすめ銭湯</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="https://www.sauna-ume-yu.com/" target="_blank" className="text-blue-600 underline">サウナの梅湯</a>
          </li>
          <li>
            <a href="https://hakusanyu.com/" target="_blank" className="text-blue-600 underline">白山湯 高瀬川店</a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">各種ページ</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><Link href="/map" className="text-blue-600 underline">地図から探す</Link></li>
          <li><Link href="/sento" className="text-blue-600 underline">銭湯一覧</Link></li>
          <li><Link href="/events" className="text-blue-600 underline">イベント情報</Link></li>
          <li><Link href="/culture" className="text-blue-600 underline">銭湯の文化</Link></li>
        </ul>
      </section>
    </main>
  );
}
