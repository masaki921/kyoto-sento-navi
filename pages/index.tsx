// pages/index.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* ヒーローセクション */}
      <section className="relative w-full h-[70vh] bg-black">
        <Image
          src="/images/top-visual.jpg" // 仮画像
          alt="銭湯の外観"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-widest">
            京の湯ナビ
          </h1>
          <p className="text-lg md:text-2xl font-light">
            京都市内の銭湯情報を探す、深める、楽しむ
          </p>
        </div>
      </section>

      {/* ナビゲーションカード */}
      <section className="py-12 px-4 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <Link href="/map" className="group border rounded-xl shadow-lg overflow-hidden">
          <div className="h-48 relative">
            <Image src="/images/map.jpg" alt="地図から探す" layout="fill" objectFit="cover" />
          </div>
          <div className="p-4 group-hover:bg-gray-50 transition">
            <h2 className="text-xl font-semibold mb-2">地図から探す</h2>
            <p className="text-sm text-gray-600">京都市内の銭湯を地図上から簡単に検索できます。</p>
          </div>
        </Link>

        <Link href="/culture" className="group border rounded-xl shadow-lg overflow-hidden">
          <div className="h-48 relative">
            <Image src="/images/culture.jpg" alt="銭湯文化" layout="fill" objectFit="cover" />
          </div>
          <div className="p-4 group-hover:bg-gray-50 transition">
            <h2 className="text-xl font-semibold mb-2">銭湯の文化を知る</h2>
            <p className="text-sm text-gray-600">京都の銭湯が育んできた地域文化や歴史を紹介します。</p>
          </div>
        </Link>

        <Link href="/events" className="group border rounded-xl shadow-lg overflow-hidden">
          <div className="h-48 relative">
            <Image src="/images/events.jpg" alt="イベント情報" layout="fill" objectFit="cover" />
          </div>
          <div className="p-4 group-hover:bg-gray-50 transition">
            <h2 className="text-xl font-semibold mb-2">イベント情報</h2>
            <p className="text-sm text-gray-600">銭湯で行われる音楽や親子向けイベントをチェック。</p>
          </div>
        </Link>
      </section>

      {/* フッター */}
      <footer className="bg-gray-100 text-center py-6 text-sm text-gray-500">
        &copy; 2025 京の湯ナビ. All rights reserved.
      </footer>
    </div>
  );
}
