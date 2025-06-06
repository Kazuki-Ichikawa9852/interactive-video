const video = document.getElementById('mainVideo');
const choices = document.getElementById('choices');

video.addEventListener('timeupdate', () => {
  // 再生時間が3秒以上で、まだ選択肢が表示されていない場合
  if (video.currentTime >= 3 && choices.style.display === 'none') {
    choices.style.display = 'flex'; // display:block ではなく flex に変更
  }
});

function choose(option) {
  video.src = `video/${option}.mp4`;
  video.play();
  choices.style.display = 'none';
}
