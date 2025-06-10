const video = document.getElementById('mainVideo');
const choices = document.getElementById('choices');
const overlay = document.getElementById('overlay');

// ✅ デバッグログ
console.log("✅ script.js 読み込み完了");

// ▶️ イントロ再生監視（例：3秒で選択肢表示）
video.addEventListener('timeupdate', () => {
  if (video.currentTime >= 3 && choices.style.display === 'none') {
    console.log("✅ 3秒経過 → 選択肢表示");
    choices.style.display = 'flex';
  }
});

// ✅ ボタンクリック時の処理（フェード付き切替）
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
      overlay.style.opacity = 0;
    };
  }, 500);
}
