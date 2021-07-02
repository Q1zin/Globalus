document.addEventListener("DOMContentLoaded", function (event) {

  // Работа с добавлением контента (ПЕРЕДЕЛАТЬ)

  document.querySelector(".popular-destinations__btn-more").addEventListener("click", function () {
    document.querySelector(".popular-destinations__btn-more").remove();
    document.querySelector(".popular-destinations__content").innerHTML += `
    <div class="popular-destinations__card card">
        <img src="img/Hawaii.webp" alt="img: фото с Гавай" class="card__img">
        <div class="card-wrap">
          <h3 class="card__title">Гавайи</h3>
          <p class="card__text">Место стало популярно, благодаря новым курортам, которые известны на весь мир</p>
          <button class="card__btn">Выбрать</button>
        </div>
      </div>
    `;

    document.querySelector(".popular-destinations__content").innerHTML += `
    <div class="popular-destinations__card card">
        <img src="img/crimea.jpg" alt="img: фото из Крыма" class="card__img">
        <div class="card-wrap">
          <h3 class="card__title">Крым</h3>
          <p class="card__text">Место стало популярно, благодаря новым курортам, которые известны на весь мир</p>
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

  AOS.init();

  document.querySelector(".popular-destinations__content").addEventListener("click", function (event) {
    if (event.target.classList.value == "card__btn") {
      let county = event.path[1].children[0].innerText;
      document.querySelector(".form__textarea").value = `Я выбираю тур "${county}". Расскажите о нём поподробнее.`;
      let href = "index.php#select-tour-form";
      window.location.href = href;
    }
  })

  $('.form__input-tel').mask('+7 (000) 000 00-00');

  document.querySelector(".form__btn").onclick = function (event) {
    let name = document.querySelector(".form__input-name").value,
      nameErrCorrect = 0,
      nameErrLangth,
      lastName = document.querySelector(".form__input-last-name").value,
      lastNameErrCorrect = 0,
      lastNameErrLangth,
      tel = document.querySelector(".form__input-tel").value,
      telErrLangth,
      text = document.querySelector(".form__textarea").value,
      textErrLenght;

    var patternName = /^[A-Za-zА-Яа-я]+$/;


    // Валидация имени
    for (let i = 0; i < name.length; i++) {
      if (!patternName.test(name[i])) {
        nameErrCorrect++;
      }
    }

    if (name.length < 3 || name.length > 32) {
      nameErrLangth = true;
      document.querySelector(".err-name").innerHTML = "Имя должно быть не менее 3 и не более 32 символов";
    } else if (nameErrCorrect > 0) {
      nameErrCorrect = true;
      document.querySelector(".err-name").innerHTML = "Введите корректное имя";
    } else {
      document.querySelector(".err-name").innerHTML = "";
    }


    // Валидация фамилии
    for (let i = 0; i < lastName.length; i++) {
      if (!patternName.test(lastName[i])) {
        lastNameErrCorrect++;
      }
    }

    if (lastName.length < 4 || lastName.length > 32) {
      lastNameErrLangth = true;
      document.querySelector(".err-last-name").innerHTML = "Фамилия должна быть не менее 4 и не более 32 символов";
    } else if (lastNameErrCorrect > 0) {
      lastNameErrCorrect = true;
      document.querySelector(".err-last-name").innerHTML = "Введите корректную фамилию";
    } else {
      document.querySelector(".err-last-name").innerHTML = "";
    }

    // Валидация телефона
    if (tel.length != 18) {
      telErrLangth = true;
      document.querySelector(".err-tel").innerHTML = "Введите корректный телефон";
    } else {
      document.querySelector(".err-tel").innerHTML = "";
    }

    // Валидация текста
    if (text.length == 0) {
      textErrLenght = true;
      document.querySelector(".err-form__textarea").innerHTML = "Введите пожелания";
    } else {
      document.querySelector(".err-form__textarea").innerHTML = "";
    }

    if (!textErrLenght && !telErrLangth && !lastNameErrCorrect && !lastNameErrLangth && !nameErrCorrect && !nameErrLangth) {
      // тут должен быть ajax запрос к бд)))

      window.location.href = 'thanks.php';
    }

  };



});