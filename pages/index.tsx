// pages/index.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6 text-gray-900">
      {/* メインビジュアル */}
      <section className="relative mb-12">
        <img
          src="/main-visual.jpg"
          alt="京都の銭湯"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white">
            京都の銭湯で心と体を癒す
          </h1>
        </div>
      </section>

      {/* サービス紹介 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">サービス紹介</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* 地図から探す */}
          <div className="text-center">
            <img
              src="/map-search.jpg"
              alt="地図から探す"
              className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">地図から探す</h3>
            <p className="text-gray-600 mb-4">
              京都市内の銭湯を地図上で簡単に探せます。
            </p>
            <Link href="/map">
              <span className="text-indigo-600 font-medium hover:underline">
                詳しく見る
              </span>
            </Link>
          </div>
          {/* 文化を知る */}
          <div className="text-center">
            <img
              src="/culture.jpg"
              alt="文化を知る"
              className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">文化を知る</h3>
            <p className="text-gray-600 mb-4">
              京都の銭湯文化や歴史について学べます。
            </p>
            <Link href="/culture">
              <span className="text-indigo-600 font-medium hover:underline">
                詳しく見る
              </span>
            </Link>
          </div>
          {/* イベント情報 */}
          <div className="text-center">
            <img
              src="/events.jpg"
              alt="イベント情報"
              className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">イベント情報</h3>
            <p className="text-gray-600 mb-4">
              銭湯で開催される最新のイベント情報をお届けします。
            </p>
            <Link href="/events">
              <span className="text-indigo-600 font-medium hover:underline">
                詳しく見る
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* おすすめの銭湯 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">おすすめの銭湯</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* サウナの梅湯 */}
          <div className="flex items-center">
            <img
              src="/umeyu.jpg"
              alt="サウナの梅湯"
              className="w-1/3 h-32 object-cover rounded-lg shadow-md mr-6"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">サウナの梅湯</h3>
              <p className="text-gray-600 mb-2">
                地元アーティストとサウナの融合を楽しめる銭湯です。
              </p>
              <Link href="/sento/umeyu">
                <span className="text-indigo-600 font-medium hover:underline">
                  詳しく見る
                </span>
              </Link>
            </div>
          </div>
          {/* 白山湯 高瀬川店 */}
          <div className="flex items-center">
            <img
              src="/hakusanyu.jpg"
              alt="白山湯 高瀬川店"
              className="w-1/3 h-32 object-cover rounded-lg shadow-md mr-6"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">白山湯 高瀬川店</h3>
              <p className="text-gray-600 mb-2">
                親子で楽しめる街中のオアシス的な銭湯です。
              </p>
              <Link href="/sento/hakusanyu">
                <span className="text-indigo-600 font-medium hover:underline">
                  詳しく見る
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 最新ニュース */}
      <section>
        <h2 className="text-3xl font-bold mb-6">最新ニュース</h2>
        <ul className="space-y-4">
          <li className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-1">
              新しい銭湯がオープンしました！
            </h3>
            <p className="text-gray-600 text-sm">
              2025年4月10日｜京都市内に最新設備を備えた銭湯がオープンしました。
            </p>
          </li>
          <li className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-1">
              サウナイベント開催決定！
            </h3>
            <p className="text-gray-600 text-sm">
              2025年5月15日｜サウナ愛好家のための特別イベントが開催されます。
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
