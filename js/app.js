window.onload = function() {
  var video = document.getElementById('video');
  var play = document.getElementById('play');
  var tvScreen = document.getElementsByClassName('tv__screen')[0];

  function handleVideoEnd() {
    video.currentTime = 0;

    video.style.display = 'none';
    tvScreen.classList.remove('glowing');
  }

  async function handleClickPlay() {
    try {
      await video.play();

      video.style.display = 'block';
      tvScreen.classList.add('glowing');
    } catch(error) {
      console.log(error);
    }
  }

  play.addEventListener('click', handleClickPlay);
  video.addEventListener('ended', handleVideoEnd);
};
