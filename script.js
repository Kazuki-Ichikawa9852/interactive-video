const video = document.getElementById('mainVideo');
const choices = document.getElementById('choices');

// ページ読み込み時のログ確認
console.log("✅ script.js 読み込み完了");

// 動画再生イベント確認
video.addEventListener('loadeddata', () => {
  console.log("🎬 intro.mp4 読み込み成功");
});

// 動画の再生時間監視
video.addEventListener('timeupdate', () => {
  console.log("🕒 再生時間: " + video.currentTime.toFixed(2));

  if (video.currentTime >= 3 && choices.style.display === 'none') {
    console.log("✅ 3秒経過 → ボタン表示");
    choices.style.display = 'flex';
  }
});

// 選択肢クリック処理
function choose(option) {
  console.log("▶️ 選択肢クリック: " + option);
  video.src = `video/${option}.mp4`;
  video.play();
  choices.style.display = 'none';
}
function choose(option) {
  console.log("▶️ 選択肢クリック: ", option);
  const path = `video/${option}.mp4`;
  console.log("🎥 読み込む動画ファイル: ", path);

  video.src = path;
  video.play();
  choices.style.display = 'none';
}
