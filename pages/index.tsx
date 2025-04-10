export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <section className="relative bg-[url('/sento-hero.jpg')] bg-cover bg-center h-[400px] flex items-center justify-center">
        <div className="bg-black bg-opacity-50 p-6 rounded-xl text-center text-white">
          <h1 className="text-4xl font-bold mb-4">今日も、湯で、整う。</h1>
          <p className="mb-6">京の銭湯をマップで、写真で、文化で。</p>
          <div className="flex gap-4 justify-center">
            <a href="/map" className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded text-white font-semibold">地図から探す</a>
            <a href="/culture" className="bg-white text-red-600 hover:text-red-700 px-5 py-2 rounded font-semibold">文化を知る</a>
          </div>
        </div>
      </section>

      {/* Pickup */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">人気の銭湯</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border p-4 rounded shadow hover:shadow-lg transition">
            <img src="/umeyu.jpg" alt="サウナの梅湯" className="rounded mb-2" />
            <h3 className="text-xl font-semibold">サウナの梅湯</h3>
            <p className="text-sm text-gray-600">地元アーティストとサウナの融合。</p>
          </div>
          <div className="border p-4 rounded shadow hover:shadow-lg transition">
            <img src="/hakusan.jpg" alt="白山湯" className="rounded mb-2" />
            <h3 className="text-xl font-semibold">白山湯 高瀬川店</h3>
            <p className="text-sm text-gray-600">親子で楽しめる街中のオアシス。</p>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">注目のイベント</h2>
          <ul className="space-y-4">
            <li className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold">こども銭湯体験</h3>
              <p className="text-sm text-gray-600">2025年6月1日｜白山湯</p>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold">銭湯でライブ！</h3>
              <p className="text-sm text-gray-600">2025年5月5日｜サウナの梅湯</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Culture */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">銭湯の文化</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img src="/culture.jpg" alt="銭湯文化" className="rounded mb-3" />
            <p className="text-gray-700">京の町に息づく銭湯文化。歴史やアートとしての銭湯絵をご紹介します。</p>
            <a href="/culture" className="mt-2 inline-block text-red-600 hover:underline">もっと読む →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
