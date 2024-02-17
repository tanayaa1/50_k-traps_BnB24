var playlist = WaveformPlaylist.init({
  container: document.getElementById("playlist"),
  colors: {
    waveOutlineColor: '#adb5bd'
  },
});

playlist.load([
  {
    "src": "media/audio/BassDrums30.mp3"
  }
]).then(function () {
  //can do stuff with the playlist.
});
