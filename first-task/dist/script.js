'use strict';

const d1 = document.querySelectorAll('.more');
const d4 = document.querySelectorAll('.botton__tlt');
const d5 = document.querySelectorAll('.text-info');
const d6 = document.querySelectorAll('.del_info');

// При нажатии "Ещё" открывается второй ряд сеансов
const changeOverlay = function () {
  const bonusTime = `
  <div class="time_boat__1 time_boat__1_3 time__more">14:00</div> <div class="time_boat__1 time_boat__1_3 time__more">15:00</div>
  <div class="time_boat__1 time_boat__1_3 time__more">16:00</div> <div class="time_boat__1 time_boat__1_3 time__more">17:00</div> <div class="time_boat__1 time_boat__1_3 time__more">20:00</div>`;

  d1[0].insertAdjacentHTML('afterend', `${bonusTime}`);
  d1[0].remove();
};

d1.forEach((d1) => d1.addEventListener('click', changeOverlay));

// Реагирование на телефонный режим, чтобы добавить слово "Акция"
const checkWidth = function () {
  // Выполняем действие, если ширина больше 600px
  let w = window.innerWidth;
  if (w > 600) {
    d6.forEach((e) => e.remove());
  }
};

// Выполняем заново при изменении размера окна
window.addEventListener('resize', function () {
  checkWidth();
});
