export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>京の湯ナビ</h1>
      <p>京都の銭湯を検索・発見するウェブサイト</p>

      <h2>おすすめ銭湯</h2>
      <ul>
        <li><a href="/sento/umeyu">サウナの梅湯</a></li>
        <li><a href="/sento/hakusanyu">白山湯 高瀬川店</a></li>
      </ul>

      <h2>各種ページ</h2>
      <ul>
        <li><a href="/map">地図から探す</a></li>
        <li><a href="/sento">銭湯一覧</a></li>
        <li><a href="/events">イベント情報</a></li>
        <li><a href="/culture">銭湯の文化</a></li>
      </ul>
    </main>
  );
}
