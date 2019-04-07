window.onload = function() {
  var video = document.getElementById('video');

  function handleVideoEnd() {
    video.currentTime = 0;

    video.removeEventListener('ended', handleVideoEnd);
    video.remove();
  }

  video.addEventListener('ended', handleVideoEnd);
};
