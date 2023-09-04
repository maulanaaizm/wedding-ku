const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector(".audio-icon-wrapper");
const song = document.querySelector("#song");
const audioIcon = document.querySelector(".audio-icon-wrapper i");
let isPlaying = false;

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };

  rootElement.style.scrollBehavior = "auto";
}

function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  // localStorage.setItem("opened", "true");

  playAudio();
}

function playAudio() {
  // song.volume = 0.1;
  audioIconWrapper.style.display = "flex";
  song.play();
  isPlaying = true;
}

audioIconWrapper.onclick = function () {
  if (isPlaying) {
    song.pause();
    audioIcon.classList.remove("bi-disc");
    audioIcon.classList.add("bi-pause-circle");
  } else {
    song.play();
    audioIcon.classList.add("bi-disc");
    audioIcon.classList.remove("bi-pause-circle");
  }

  isPlaying = !isPlaying;
};

// if (!localStorage.getItem("opened")) {
//   disableScroll();
// }
disableScroll();

// const urlParams = new URLSearchParams(window.location.search);
// const nama = urlParams.get("n") || "";
// const pronoun = urlParams.get("p") || "Bapak/Ibu/Saudara/i";
// const namaContainer = document.querySelector(".hero h4 span");
// namaContainer.innerText = nama;

// namaContainer.innerText = ` ${pronoun} ${nama},`.replace(/ ,$/, ",");

// document.querySelector("#nama").value = nama;
