// app/events.tsx
export default function EventsPage() {
  return (
    <div className="py-8 px-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">イベント情報</h1>
      <ul className="space-y-6">
        <li className="border p-4 rounded shadow-sm bg-white">
          <h2 className="text-xl font-semibold">銭湯でライブ！</h2>
          <p className="text-gray-600">2025年5月5日（月）｜サウナの梅湯</p>
          <p className="mt-2 text-sm">地元アーティストによる音楽ライブ。サウナと音楽の癒やしを体感できます。</p>
        </li>
        <li className="border p-4 rounded shadow-sm bg-white">
          <h2 className="text-xl font-semibold">こども銭湯体験</h2>
          <p className="text-gray-600">2025年6月1日（日）｜白山湯 高瀬川店</p>
          <p className="mt-2 text-sm">小学生向けの銭湯ツアーと絵日記ワークショップ。親子で参加できます。</p>
        </li>
      </ul>
    </div>
  );
}
