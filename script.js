/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Play / Pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update button text
function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

// Update progress bar
function handleProgress() {
  if (!video.duration) return;

  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
}

// Seek using progress bar
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Volume control
function handleVolume() {
  video.volume = this.value;
}

// Playback speed control
function handlePlaybackSpeed() {
  video.playbackRate = this.value;
}

// Rewind 10 seconds
function rewindVideo() {
  video.currentTime = Math.max(0, video.currentTime - 10);
}

// Skip 25 seconds
function skipVideo() {
  video.currentTime = Math.min(
    video.duration || Infinity,
    video.currentTime + 25
  );
}

// Error handling
function handleError() {
  console.error('Video failed to load.');
}

// Event listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

video.addEventListener('timeupdate', handleProgress);

progress.addEventListener('click', scrub);

volume.addEventListener('input', handleVolume);
playbackSpeed.addEventListener('input', handlePlaybackSpeed);

rewind.addEventListener('click', rewindVideo);
skip.addEventListener('click', skipVideo);

video.addEventListener('error', handleError);
