const video = document.getElementById('mainVideo');
const choices = document.getElementById('choices');
const overlay = document.getElementById('overlay');

// 初期：ふわっと表示用
overlay.style.opacity = 1;

video.addEventListener('loadeddata', () => {
  setTimeout(() => {
    overlay.style.opacity = 0;
  }, 300);
});

// 時間監視で選択肢を表示（例：10秒後）
video.addEventListener('timeupdate', () => {
  if (video.currentTime >= 10 && choices.style.display === 'none') {
    choices.style.display = 'flex';
  }
});

function choose(option) {
  overlay.style.opacity = 1;

  setTimeout(() => {
    video.src = `video/${option}.mp4`;
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
