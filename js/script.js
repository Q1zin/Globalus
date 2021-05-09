var btnMenu = 0;

function closeMenu() {
  document.querySelector(".header").classList.remove("header--active");
  document.querySelector(".header__links-main").classList.remove("header__links-main--active");
  document.querySelector(".header__links").classList.remove("header__links--active");
  strech[1].style.width = 24 + "px";
  strech[0].style.transform = "rotate(0deg)";
  strech[2].style.transform = "rotate(0deg)";
  strech[1].style.left = 0 + "px";
  setTimeout(function () {
    strech[0].style.top = 0 + "px";
    strech[1].style.top = 8 + "px";
    strech[2].style.top = 16 + "px";
  }, 200)
}

function openMenu() {
  document.querySelector(".header").classList.add("header--active");
    document.querySelector(".header__links-main").classList.add("header__links-main--active");
    document.querySelector(".header__links").classList.add("header__links--active");
    strech[0].style.top = 8 + "px";
    strech[2].style.top = 8 + "px";
    strech[1].style.width = 0;
    strech[1].style.left = 50 + "%";
    setTimeout(function () {
      strech[0].style.transform = "rotate(45deg)";
      strech[0].style.transformOrigin = "center";
      strech[2].style.transform = "rotate(-45deg)";
      strech[2].style.transformOrigin = "center";
    }, 200)
}

document.querySelector(".header__menu").addEventListener("click", function (e) {
  e.preventDefault();

  if (btnMenu) {
    closeMenu();
    btnMenu = 0;
  } else {
    openMenu();
    btnMenu = 1;
  }
})

document.querySelector(".header__links").addEventListener("click", function (e) {
  if (e.target.children.length == 0) {
    closeMenu();
    btnMenu = 0;
  }
})