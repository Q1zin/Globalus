let widthWindow = window.screen.width;

document.addEventListener("DOMContentLoaded", function (event) {

  // Работа с меню

  var btnMenu = 0;
  var strech = document.getElementsByClassName("header__menu--strech");

  function closeMenu() {
    document.querySelector(".header").classList.remove("header--active");
    document.querySelector(".header__links-main").classList.remove("header__links-main--active");
    document.querySelector(".header__links").classList.remove("header__links--active");
    document.querySelector(".html").style.overflowY = "auto";
    strech[1].style.width = 24 + "px";
    strech[0].style.transform = "rotate(0deg)";
    strech[2].style.transform = "rotate(0deg)";
    strech[1].style.left = 0 + "px";
    setTimeout(function () {
      strech[0].style.top = 0 + "px";
      strech[1].style.top = 8 + "px";
      strech[2].style.top = 16 + "px";
      btnMenu = 0;
    }, 150)
    return true;
  }

  function openMenu() {
    document.querySelector(".header").classList.add("header--active");
    document.querySelector(".header__links-main").classList.add("header__links-main--active");
    document.querySelector(".header__links").classList.add("header__links--active");
    strech[0].style.top = 8 + "px";
    strech[2].style.top = 8 + "px";
    strech[1].style.width = 0;
    strech[1].style.left = 50 + "%";
    document.querySelector(".html").style.overflowY = "hidden";
    setTimeout(function () {
      strech[0].style.transform = "rotate(45deg)";
      strech[0].style.transformOrigin = "center";
      strech[2].style.transform = "rotate(-45deg)";
      strech[2].style.transformOrigin = "center";
      btnMenu = 1;
    }, 150);
  }

  document.querySelector(".header__menu").addEventListener("click", function (e) {
    e.preventDefault();

    if (btnMenu) {
      closeMenu();
    } else {
      openMenu();
    }
  })

  document.querySelector(".header__links").addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.children.length == 0) {
      if (closeMenu()) {
        let href = e.target.attributes[0].value;
        if (href == "header__links--btn") return;
        if (widthWindow <= 768) {
          setTimeout(function () {
            window.location.href = href;
          }, 150);
        } else {
          window.location.href = href;
        }
      }

    }
  })
})