let baner = document.querySelector(".baner"),
  close = document.querySelector(".close");

setTimeout(function () {
  baner.style.display = "block";
  Confetti();
}, 2000);

close.addEventListener("click", function (e) {
  baner.style.display = "none";
});

let confettiContainer = document.querySelector(".confetti-container");

function Confetti() {
  for (let i = 0; i < 128; i++) {
    let confettiDiv = document.createElement("div");
    confettiDiv.classList.add("confetti");
    if (i % 2 === 0) {
      confettiDiv.classList.add("black-confetti");
    } else {
      confettiDiv.classList.add("gold-confetti");
    }
    confettiDiv.style.height = 12 + (i % 10) + "px";
    confettiDiv.style.left = Math.random() * 100 + "%";
    confettiDiv.style.animationDelay = -(Math.random() * 6) + "s";
    confettiContainer.appendChild(confettiDiv);
  }
  setTimeout(function () {
    confettiContainer.style.top = "0";
  }, 6000);
}

let por = document.querySelector(".por"),
  dal = document.querySelector(".dal");

setTimeout(function Funs() {
  por.style.left = "calc(-1980px + 50% + 595px)";
  dal.style.right = "calc(-2560px + 50% + 595px + 290px)";
  gameAnnouncement();
}, 10000);

let cupContainer = document.querySelector(".cup-container"),
  gametext = document.querySelector(".game-text"),
  textOne = document.querySelector(".game-text__one"),
  textGame = document.querySelector(".game-text__game"),
  textGlory = document.querySelector(".game-text__glory"),
  portlandLogo = document.querySelector(".portland-logo"),
  dallasLogo = document.querySelector(".dallas-logo"),
  portlandLogoSmall = document.querySelector(".portland-logo-small"),
  dallasLogoSmall = document.querySelector(".dallas-logo-small"),
  tvMatch = document.querySelector(".tv-match"),
  tvMatchPromo = document.querySelector(".tv-match__promo");

function gameAnnouncement() {
  setTimeout(function () {
    textOne.style.visibility = "visible";
    cupContainer.style.display = "none";
    confettiContainer.style.display = "none";
  }, 3000);
  setTimeout(function () {
    textGame.style.visibility = "visible";
  }, 4000);
  setTimeout(function () {
    textGlory.style.visibility = "visible";
    portlandLogo.style.display = "block";
    dallasLogo.style.display = "block";
    portlandLogo.style.animation = "logo-opacity 1s";
    dallasLogo.style.animation = "logo-opacity 1s";
  }, 5000);
  setTimeout(function () {
    portlandLogo.style.display = "none";
    dallasLogo.style.display = "none";
    portlandLogoSmall.style.display = "block";
    dallasLogoSmall.style.display = "block";
  }, 6000);
  setTimeout(function () {
    gametext.style.display = "none";
    por.style.animation = "4s ease-in por-left";
    dal.style.animation = "4s ease-in dal-right";
    portlandLogoSmall.style.animation = "4s ease-in por-small-left";
    dallasLogoSmall.style.animation = "4s ease-in dal-small-right";
    tvMatch.style.display = "block";
  }, 7000);
  setTimeout(function () {
    por.style.display = "none";
    dal.style.display = "none";
    portlandLogoSmall.style.display = "none";
    dallasLogoSmall.style.display = "none";
  }, 11000);
}

let tvMatchHotspot = document.querySelector(".tv-match__hotspot"),
  tvMatchVideo = document.querySelector(".tv-match__video");

tvMatchHotspot.addEventListener("click", function first(e) {
  tvMatchHotspot.style.zIndex = "2";
  tvMatchHotspot.style.transform = "rotate(45deg)";
  tvMatchVideo.style.display = "block";
  this.removeEventListener("click", first);

  tvMatchHotspot.addEventListener("click", function () {
    tvMatchVideo.style.display = "none";
    tvMatchHotspot.style.zIndex = "1";
    tvMatchHotspot.style.transform = "rotate(90deg)";
    tvMatchHotspot.addEventListener("click", first);
  });
});

let tvMatchPlay = document.querySelector(".tv-match__play");

function play() {
  tvMatchPromo.play();
  tvMatchPlay.style.display = "none";
}
