import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* ヘッダー */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            今日も、湯で、整う。
          </h1>
          <p className="text-lg text-gray-600">
            京都の銭湯をマップで、写真で、文化で。
          </p>
          <Link
            href="/culture"
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            地図から探す×文化を知る
          </Link>
        </header>

        {/* 銭湯カードセクション */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">人気の銭湯</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <Image
                src="/images/umeyu.jpg"
                alt="サウナの梅湯"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">サウナの梅湯</h3>
                <p className="text-sm text-gray-600">
                  地元アーティストとサウナの融合。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <Image
                src="/images/hakusanyu.jpg"
                alt="白山湯 高瀬川店"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">白山湯 高瀬川店</h3>
                <p className="text-sm text-gray-600">
                  親子で楽しめる街中のオアシス。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* イベントセクション */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">注目のイベント</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <h3 className="font-bold text-lg">● こども銭湯体験</h3>
              <p className="text-sm">2025年6月1日｜白山湯</p>
            </li>
            <li>
              <h3 className="font-bold text-lg">● 銭湯でライブ！</h3>
              <p className="text-sm">2025年5月5日｜サウナの梅湯</p>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
