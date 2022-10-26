'use strict';

const d1 = document.querySelectorAll('.more');
const d4 = document.querySelectorAll('.botton__tlt');
const d5 = document.querySelectorAll('.text-info');
// console.log(d5);
const d6 = document.querySelectorAll('.del_info');

// При нажатии "Ещё" открывается второй ряд сеансов
const changeOverlay = function () {
  // console.log('hi');
  // console.log(d1);
  const bonusTime = `
  <div class="time_boat__1 time_boat__1_3 time__more">14:00</div> <div class="time_boat__1 time_boat__1_3 time__more">15:00</div>
  <div class="time_boat__1 time_boat__1_3 time__more">16:00</div> <div class="time_boat__1 time_boat__1_3 time__more">17:00</div> <div class="time_boat__1 time_boat__1_3 time__more">20:00</div>`;

  d1[0].insertAdjacentHTML('afterend', `${bonusTime}`);
  // document.getElementById("register").remove()
  d1[0].remove();
  // const d2 = document.querySelectorAll('.time__more');
  // console.log(d2);
  // if (d2!= 0) {
  //   const d3 = document.querySelectorAll('.time_boat');
  //   d3[0].style. '6 / 8 '
  // }
  // d1[0].style.opacity = '0';
};
// console.log(d2);

// d1.forEach(() => d1.addEventListener('click', changeOverlay));
// d1.addEventListener('click', changeOverlay)

d1.forEach((d1) => d1.addEventListener('click', changeOverlay));

// Реагирование на телефонный режим, чтобы добавить слово "Акция"
const checkWidth = function () {
  // Выполняем действие, если ширина больше 600px
  let w = window.innerWidth;
  if (w > 600) {
    // d5[0].insertAdjacentHTML('afterbegin', 'АКЦИЯ - ');
    console.log('Че-то делаем');
    console.log(d6);
    // d6.forEach.remove();
    d6.forEach(e => e.remove())
  }
};

// Выполняем заново при изменении размера окна
window.addEventListener('resize', function () {
  // console.log('Размер окна изменен');
  checkWidth();
  // console.log(d5);
});
