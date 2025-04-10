// pages/index.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        今日も、湯で、整う。
      </h1>
      <p className="text-lg mb-6">
        京都の銭湯をマップで、写真で、文化で。
      </p>

      <div className="mb-8">
        <Link href="/map">
          <span className="text-indigo-600 underline mr-4">地図から探す</span>
        </Link>
        <Link href="/culture">
          <span className="text-purple-600 underline">文化を知る</span>
        </Link>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">人気の銭湯</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img
              src="/umeyu.jpg"
              alt="サウナの梅湯"
              className="rounded-lg shadow-md mb-2"
            />
            <h3 className="text-xl font-semibold">サウナの梅湯</h3>
            <p className="text-sm">地元アーティストとサウナの融合。</p>
          </div>
          <div>
            <img
              src="/hakusanyu.jpg"
              alt="白山湯 高瀬川店"
              className="rounded-lg shadow-md mb-2"
            />
            <h3 className="text-xl font-semibold">白山湯 高瀬川店</h3>
            <p className="text-sm">親子で楽しめる街中のオアシス。</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">注目のイベント</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="font-bold">● こども銭湯体験</h3>
            <p className="text-sm">2025年6月1日｜白山湯</p>
          </li>
          <li>
            <h3 className="font-bold">● 銭湯でライブ！</h3>
            <p className="text-sm">2025年5月5日｜サウナの梅湯</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
