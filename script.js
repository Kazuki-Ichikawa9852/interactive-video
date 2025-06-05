const video = document.getElementById('mainVideo');
const choices = document.getElementById('choices');

video.addEventListener('timeupdate', () => {
  // 再生時間が5秒を超えたら選択肢を表示
  if (video.currentTime >= 5 && choices.style.display === 'none') {
    choices.style.display = 'block';
  }
});

function choose(option) {
  video.src = `video/${option}.mp4`;  // または DropboxのURL
  video.play();
  choices.style.display = 'none';
}
