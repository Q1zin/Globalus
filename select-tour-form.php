<div class="select-tour-form" id="select-tour-form">
  <h2 class="select-tour-form__title">Индивидуальный подбор тура</h1>
    <form action="" method="GET" class="select-tour-form__form form" onsubmit="return false;" data-aos="fade-right">
      <div class="form-wrap">
        <label for="name" class="form__label">Ваше имя</label>
        <input class="form__input form__input-name" placeholder="Иван" type="text" name="name" id="name">
        <span class="err-form err-name"></span>
        <label for="last-name" class="form__label">Ваша фамилия</label>
        <input class="form__input form__input-last-name" placeholder="Иванов" type="text" name="last-name" id="last-name">
        <span class="err-form err-last-name"></span>
        <label for="tel" class="form__label">Ваш телефон</label>
        <input class="form__input form__input-tel" placeholder="+7 (xxx) xxx xx-xx" type="tel" name="tel" id="tel">
        <span class="err-form err-tel"></span>
        <label for="text" class="form__label">Ваши пожелания</label>
        <textarea class="form__textarea" placeholder="Я хочу поехать..." type="text" name="text" id="text"></textarea>
        <span class="err-form err-form__textarea"></span>
        <button class="form__btn" name="send">Отправить</button>
      </div>
    </form>
</div>
<span class="select-tour-form__none">.</span>