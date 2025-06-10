const video = document.getElementById('mainVideo');
const choices = document.getElementById('choices');
const overlay = document.getElementById('overlay');

// ✅ 初期：オーバーレイを表示しておく（真っ黒）
overlay.style.opacity = 1;

// ✅ 初回のイントロ動画準備完了でフェードイン
video.addEventListener('loadeddata', () => {
  console.log("🎬 初回動画準備完了 → フェードイン");
  setTimeout(() => {
    overlay.style.opacity = 0;
  }, 300); // 少し待ってからふわっと
});

// ✅ 時間経過で選択肢を表示
video.addEventListener('timeupdate', () => {
  if (video.currentTime >= 3 && choices.style.display === 'none') {
    console.log("✅ 3秒経過 → 選択肢表示");
    choices.style.display = 'flex';
  }
});

// ✅ 動画切り替え時（フェード付き）
function choose(option) {
  console.log("▶️ 選択肢クリック: " + option);
  const path = `video/${option}.mp4`;

  overlay.style.opacity = 1;

  setTimeout(() => {
    video.src = path;
    video.load();

    video.onloadeddata = () => {
      video.play();
      choices.style.display = 'none';
      setTimeout(() => {
        overlay.style.opacity = 0;
      }, 300);
    };
  }, 400);
}
