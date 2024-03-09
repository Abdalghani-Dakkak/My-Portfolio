let body2 = document.getElementById("body2");
let identification = document.getElementById("identification");
let scrollDownBtn = document.getElementById("scroll-down");
let btnIdentificationVar = document.getElementById("btn-identification");
function animation() {
  let blackHole = document.getElementById("blackhole");
  let planets = document.getElementById("planets");
  let orbits = Array.from(document.getElementById("orbits").children);
  let mercury = document.getElementById("mercury");
  let venus = document.getElementById("venus");
  let earth = document.getElementById("earth");
  let mars = document.getElementById("mars");
  let planet = [mercury, venus, earth, mars];

  if (identification.style.transform == "translate(-350px)") {
    identification.style.cssText =
      "transition: 1s; transform: translate(-600px);";
  }

  btnIdentificationVar.style.opacity = 0;

  blackHole.style.cssText =
    "transition: 2s; transform: scale(1.5); z-index: 2;";

  scrollDownBtn.style.cssText =
    "bottom: 25%; left: 75%; transform: rotate(45deg)";
  setTimeout(() => {
    scrollDownBtn.style.display = "none";
  }, 2000);

  setTimeout(() => {
    blackHole.style.cssText = "transform:scale(2.5)";
    blackHole.style.zIndex = "2";

    identification.style.cssText =
      "animation: animationPath 2s linear .1s forwards, animationPath2 1s linear 2.1s forwards;";
    orbits.forEach((e) => {
      e.style.cssText =
        "animation-iteration-count: 0; border-color: transparent;";
    });

    planet.forEach((e) => {
      if (e.style.left != 0) {
        e.style.cssText = "transform:translate(-50%, 100%) rotate(1360deg);";
      } else {
        e.style.cssText = "transform:translate(150%, 100%) rotate(1360deg);";
      }
    });

    planets.style.cssText = "right: 25%; top: 75%;";

    setTimeout(() => {
      blackHole.style.cssText =
        "outline: 2px solid #3838d1; transform:scale(3.5);";
      blackHole.style.zIndex = "2";

      setTimeout(() => {
        identification.style.display = "none";
        planets.style.display = "none";
        btnIdentificationVar.style.display = "none";

        setTimeout(() => {
          blackHole.style.cssText = "transform: scale(0);";
          blackHole.style.zIndex = "2";

          setTimeout(() => {
            location.href = "/me.html";
          }, 4000);
        }, 500);
      }, 2500);
    }, 500);
  }, 700);
}

// whitehole
let whitehole = document.getElementById("whitehole");
let meParent = document.getElementById("me-parent");
let me = document.getElementById("me");

window.onload = () => {
  body2.style.cssText = "overflow: visible;";
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
  body2.style.cssText = "overflow: hidden;";
  whitehole.style.cssText = "z-index: 0";
  meParent.style.cssText = "z-index: 2";
  setTimeout(() => {
    whitehole.style.cssText = "transform: scale(1); z-index: 0;";
    setTimeout(() => {
      meParent.style.cssText = "transform: scale(1); opacity: 1; z-index: 2;";
      setTimeout(() => {
        me.style.opacity = 1;
        setTimeout(() => {
          whitehole.style.cssText = "transform: scale(0);";
          body2.style.cssText = "overflow: visible;";
        }, 1000);
      }, 2000);
    }, 3000);
  }, 500);
};

// btn-identification
let counter = 0;

function btnIdentification() {
  if (counter % 2 == 0) {
    identification.style.cssText =
      "transition: 1s; transform: translate(-350px)";
    if (document.body.clientHeight <= 685) {
      btnIdentificationVar.style.cssText =
        "left: 350px; transform: rotateY(180deg);";
    } else if (document.body.clientHeight >= 840) {
      btnIdentificationVar.style.cssText =
        "bottom: 10%; left: 350px; transform: rotateY(180deg);";
    } else {
      btnIdentificationVar.style.cssText =
        "bottom: 20px; left: 350px; transform: rotateY(180deg);";
    }
    scrollDownBtn.style.cssText = "pointer-events: auto; color: #fff;";
  } else {
    identification.style.cssText =
      "transition: 1s; transform: translate(-600px)";

    if (document.body.clientHeight <= 635) {
      btnIdentificationVar.style.cssText =
        "left: 620px; transform: rotateY(0deg);";
    } else if (
      document.body.clientHeight > 635 &&
      document.body.clientHeight < 750
    ) {
      btnIdentificationVar.style.cssText =
        "bottom: 90px; left: 620px; transform: rotateY(0deg);";
    } else {
      btnIdentificationVar.style.cssText =
        "bottom: 20%; left: 620px; transform: rotateY(0deg);";
    }
  }
  counter++;
}

// Hover effect
let li = Array.from(document.querySelectorAll("#media li a"));

li.forEach((e) => {
  e.addEventListener("mouseover", (_) => {
    li.forEach((e) => {
      e.classList.add("opacity");
    });
    e.classList.remove("opacity");
  });
  e.addEventListener("mouseout", (_) => {
    li.forEach((e) => {
      e.classList.remove("opacity");
    });
  });
});
