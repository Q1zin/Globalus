document.addEventListener("DOMContentLoaded", function (event) {

  // Работа с меню

  var btnMenu = 0;
  var strech = document.getElementsByClassName("header__menu--strech");

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
      btnMenu = 0;
    }, 150)
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
    if (e.target.children.length == 0) {
      closeMenu();
    }
  })

  // Работа с добавлением контента (ПЕРЕДЕЛАТЬ)

  document.querySelector(".popular-destinations__btn-more").addEventListener("click", function () {
    document.querySelector(".popular-destinations__btn-more").remove();
    document.querySelector(".popular-destinations__content").innerHTML += `
    <div class="popular-destinations__card card">
        <img src="img/Hawaii.webp" alt="img: фото с Гавай" class="card__img">
        <div class="card-wrap">
          <h3 class="card__title">Гавайи</h3>
          <p class="card__text">Место стало популярно благодаря новым, современным курортам, известных на весь мир, и выходу к морю</p>
          <button class="card__btn">Выбрать</button>
        </div>
      </div>
    `;

    document.querySelector(".popular-destinations__content").innerHTML += `
    <div class="popular-destinations__card card">
        <img src="img/crimea.jpg" alt="img: фото из Крыма" class="card__img">
        <div class="card-wrap">
          <h3 class="card__title">Крым</h3>
          <p class="card__text">Место стало популярно благодаря новым, современным курортам, известных на весь мир, и выходу к морю</p>
          <button class="card__btn">Выбрать</button>
        </div>
      </div>
    `;
  })

  // Слайдер 

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    keyboard: true,
  });

});