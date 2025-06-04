const video = document.getElementById('mainVideo');
const choices = document.getElementById('choices');

video.addEventListener('timeupdate', () => {
  if (video.currentTime >= 10 && choices.style.display === 'none') {
    choices.style.display = 'block';
  }
});

function choose(option) {
  video.src = `video/${option}.mp4`;
  video.play();
  choices.style.display = 'none';
}
