console.log("🎵 D-MUSIC SCRIPT LOADED");

const songs = [
  { songName: "Jhol", filePath: "1.mp3", coverPath: "1.jpg" },
  { songName: "Finding Her", filePath: "2.mp3", coverPath: "2.webp" },
  { songName: "Hanuman Chalisa", filePath: "3.mp3", coverPath: "3.webp" }
];

const audio = new Audio();
let currentIndex = 0;

const miniCover = document.getElementById("miniCover");
const miniSongName = document.getElementById("miniSongName");
const miniPlayPause = document.getElementById("miniPlayPause");
const miniPrev = document.getElementById("miniPrev");
const miniNext = document.getElementById("miniNext");
const nowPlayingCover = document.getElementById("nowPlayingCover");
const nowPlayingTitle = document.getElementById("nowPlayingTitle");

function loadSong(index) {
  const song = songs[index];
  audio.src = song.filePath;
  miniCover.src = song.coverPath;
  miniSongName.innerText = song.songName;
  nowPlayingCover.src = song.coverPath;
  nowPlayingTitle.innerText = song.songName;
}

function playSong() {
  audio.play();
  miniPlayPause.classList.remove("fa-play");
  miniPlayPause.classList.add("fa-pause");
}

function pauseSong() {
  audio.pause();
  miniPlayPause.classList.remove("fa-pause");
  miniPlayPause.classList.add("fa-play");
}

// Load first song on page load
document.addEventListener("DOMContentLoaded", () => {
  loadSong(currentIndex);

  miniPlayPause.addEventListener("click", () => {
    if (audio.paused) {
      playSong();
    } else {
      pauseSong();
    }
  });

  miniPrev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadSong(currentIndex);
    playSong();
  });

  miniNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % songs.length;
    loadSong(currentIndex);
    playSong();
  });
});
