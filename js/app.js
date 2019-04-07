window.onload = function() {
  var video = document.getElementById('video');

  function handleVideoEnd() {
    video.removeEventListener('ended', handleVideoEnd);
    video.remove();
  }

  video.addEventListener('ended', handleVideoEnd);
};
