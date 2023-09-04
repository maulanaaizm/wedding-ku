const rootElement = document.querySelector(":root");
function disableScroll() {
  scrollTop = window.pageXOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageYOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(screenTop, screenLeft);
  };

  rootElement.style.scrollBehavior = "auto";
}

function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  localStorage.setItem("opened", "true");
}

if (!localStorage.getItem("opened")) {
  disableScroll();
}
