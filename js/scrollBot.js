const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn5 = document.getElementById("btn5");
// let Y = document.querySe
// let MaxY = sqrollMaxY;

let p = Math.floor(
  (Math.floor(scrollMaxY - scrollY) / Math.floor(scrollMaxY)) * 100
);

btn2.addEventListener("click", function () {
  // console.log("klikam");

  if (btn2.classList == "pauza") {
    let i = 1000;

    const time = setInterval(() => {
      i--;
      window.scrollBy({
        top: 25, // to działa poprawnie przewija o tysiąc w dół
        left: 0,
        behavior: "smooth",
      });
      if (i <= 0) {
        // console.log("Koniec!");
        clearInterval(time);
        btn.disabled = false;
      }
      if (btn2.classList == "play") {
        // console.log("Koniec!");
        clearInterval(time);
        btn.disabled = false;
      }

      // if (Y == MaxY) {
      //   console.log("Koniec!");
      //   clearInterval(time);
      //   btn.disabled = false;
      // }
    }, 50);
  }
  if (btn2.classList == "play") {
    clearInterval();
  }
  if (scrollY > 5670) {
    clearInterval();
    brake;
  }
});
btn3;
// console.log(p);

document.addEventListener("scroll", function () {
  // console.log(
  //   Math.floor(
  //     (Math.floor(scrollMaxY - scrollY) / Math.floor(scrollMaxY)) * 100
  //   )
  // );
});
