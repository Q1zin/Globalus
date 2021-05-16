<div class="select-tour-form">
  <h1 class="select-tour-form__title">Индивидуальный подбор тура</h1>
  <form action="" method="GET" class="select-tour-form__form form" onsubmit="return false;">
    <div class="form-wrap">
      <label for="name" class="form__label">Ваше имя</label>
      <input class="form__input" required placeholder="Иван" type="text" name="name" id="name">
      <label for="last-name" class="form__label">Ваша фамилия</label>
      <input class="form__input" required placeholder="Иванович" type="text" name="last-name" id="last-name">
      <label for="tel" class="form__label">Ваш телефон</label>
      <input class="form__input" required placeholder="+7 xxx xxx xx xx" type="tel" name="tel" id="tel">
      <label for="text" class="form__label">Ваши пожелания</label>
      <textarea class="form__textarea" required placeholder="Я хочу поехать..." type="text" name="text" id="text"></textarea>
      <button class="form__btn" name="send">Отправить</button>
    </div>
  </form>
</div>
<span class="select-tour-form__none">.</span>