export default function HomePage() {
  return (
    <div>
      <h1>京の湯ナビ</h1>
      <p>京都の銭湯を検索・発見するウェブサイト</p>
      <h2>おすすめ銭湯</h2>
      <ul>
        <li><a href="https://example.com/umeyu" target="_blank">サウナの梅湯</a></li>
        <li><a href="https://example.com/hakusanyu" target="_blank">白山湯 高瀬川店</a></li>
      </ul>
      <h2>各種ページ</h2>
      <ul>
        <li><a href="/map">地図から探す</a></li>
        <li><a href="/events">イベント情報</a></li>
        <li><a href="/culture">銭湯の文化</a></li>
      </ul>
    </div>
  );
}