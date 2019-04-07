window.onload = function() {
  var video = document.getElementById('video');
  var tvScreen = document.getElementsByClassName('tv__screen')[0];

  tvScreen.classList.add('glowing');

  function handleVideoEnd() {
    video.currentTime = 0;

    video.removeEventListener('ended', handleVideoEnd);
    video.remove();
  }

  video.addEventListener('ended', handleVideoEnd);
};
