const player = document.getElementById("btn2");
const stopped = document.getElementById("btn3");
const up = document.getElementById("btn5");
const play = document.querySelector(".play");
const pauza = document.querySelector(".pauza");
const stop = document.querySelector(".stop");
const ostop = document.querySelector(".ostop");
const bTT = document.querySelector("btn5");

btn2.addEventListener("click", function () {
  btn2.classList.toggle("pauza");
  btn2.classList.toggle("play");
  btn3.classList.toggle("email");
  // btn3.classList.toggle("ostop");
});

btn3.addEventListener("click", function () {
  if (btn3.classList == "email") {
    btn3.classList.remove("email");
    btn3.classList.add("oemail");
    window.scrollTo(0, document.body.scrollHeight);
  }
});
btn5.addEventListener("click", function () {
  btn5.classList.add("up");
  console.log("dodałem klasę up");
  if ((scrollY = 0)) {
    btn5.classList.remove("up");
  }
});
document.addEventListener("scroll", function () {
  // const Y = scrollY;
  console.log(Math.floor(scrollY));
  if (scrollY > 5670) {
    player.classList.remove("pauza");
    console.log("usunąłem pauze");
    clearInterval(time);
  }
});
document.addEventListener("scroll", function () {
  // console.log(Math.floor(scrollY));
  // console.log(scrollMaxY);
  if (Math.floor(scrollY) < 4000) {
    // console.log("jestem poniżej 4000")
    btn5.classList.add("cover");
  }
  if (scrollY > 4000) {
    // console.log("jestem ponad 4000")
    btn5.classList.remove("cover");
  }
});

window.addEventListener("scroll", function () {});