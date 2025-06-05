const video = document.getElementById('mainVideo');
const choices = document.getElementById('choices');

video.addEventListener('timeupdate', () => {
  // 3秒以上再生されたら選択肢を表示
  if (video.currentTime >= 3 && choices.style.display === 'none') {
    choices.style.display = 'block';
  }
});

function choose(option) {
  video.src = `video/${option}.mp4`;  // Dropbox経由にするならここをURLに変更
  video.play();
  choices.style.display = 'none';
}
