'use strict';

const firstWayArr = [
  '2021-08-21 18:00:00',
  '2021-08-21 18:30:00',
  '2021-08-21 18:45:00',
  '2021-08-21 19:00:00',
  '2021-08-21 19:15:00',
  '2021-08-21 21:00:00',
];
const secondWayArr = [
  '2021-08-21 18:30:00',
  '2021-08-21 18:45:00',
  '2021-08-21 19:00:00',
  '2021-08-21 19:15:00',
  '2021-08-21 19:35:00',
  '2021-08-21 21:50:00',
  '2021-08-21 21:55:00',
];
let checkWay = '';
let newTime = `<label for="time">Выберите время</label>`;
let timeAToB = `<select name="time" id="time" class="time time1"><option value="18:00(из A в B)">18:00(из A в B)</option>
  <option value="18:30(из A в B)">18:30(из A в B)</option>
  <option value="18:45(из A в B)">18:45(из A в B)</option>
  <option value="19:00(из A в B)">19:00(из A в B)</option>
  <option value="19:15(из A в B)">19:15(из A в B)</option>
  <option value="21:00(из A в B)">21:00(из A в B)</option> </select>`;
let timeBToA = `<select name="time" id="time" class="time_del time1"><option value="18:30(из B в A)">18:30(из B в A)</option>
  <option value="18:45(из B в A)">18:45(из B в A)</option>
  <option value="19:00(из B в A)">19:00(из B в A)</option>
  <option value="19:15(из B в A)">19:15(из B в A)</option>
  <option value="19:35(из B в A)">19:35(из B в A)</option>
  <option value="21:50(из B в A)">21:50(из B в A)</option>
  <option value="21:55(из B в A)">21:55(из B в A)</option> </select>`;
let takeTime = `<div class="next_div">Выбрать</div>`;

let timeTo18 = `<select name="time" id="time" class="time_del_1 time1">
<option value="19:00(из B в A)">19:00(из B в A)</option>
<option value="19:15(из B в A)">19:15(из B в A)</option>
<option value="19:35(из B в A)">19:35(из B в A)</option>
<option value="21:50(из B в A)">21:50(из B в A)</option>
<option value="21:55(из B в A)">21:55(из B в A)</option> </select>`;

let timeTo1830 = `<select name="time" id="time" class="time_del_1 time1">
<option value="19:35(из B в A)">19:35(из B в A)</option>
<option value="21:50(из B в A)">21:50(из B в A)</option>
<option value="21:55(из B в A)">21:55(из B в A)</option> </select>`;

let timeTo1845 = `<select name="time" id="time" class="time_del_1 time1">
<option value="21:50(из B в A)">21:50(из B в A)</option>
<option value="21:55(из B в A)">21:55(из B в A)</option> </select>`;

let timeTo21 = `<select name="time" id="time" class="time_del_1 time1">
<option value="21:55(из B в A)">21:55(из B в A)</option> </select>`;

let bill = `<label for="num">Количество билетов</label>
<input id="num" type='number' class='numb'>
<button class='b-2'>Посчитать</button>`;

let priceForOneWay = 700;
let priceForTwoWays = 1200;
let roadTime = 50;

const d1 = document.querySelector('.choiceWay');

const choiceWay = function () {
  let newText = `<div class="block_way" id='block_id'>
  <label for="cars" class="del">Выбрать направление:  </label>
    <select name="route" id="route" class='route''>
      <option value="из A в B" id="wayFirst">из A в B</option>
      <option value="из B в A" id="waySecond">из B в A</option>
      <option value="из A в B и обратно в А" id="wayThirdh">из A в B и обратно в А</option>
    </select><div class="new_div">Выбрать</div></div>
    `;
  d1.insertAdjacentHTML('beforeBegin', `${newText}`);
  d1.remove();

  const d2 = document.querySelector('.new_div');
  const del1 = document.querySelector('.del');
  const del2 = document.querySelector('.route');

  //кнопка переводит на выбор направления
  document.querySelector('.new_div').addEventListener('click', () => {
    let data = document.querySelector('.route').value;

    checkWay = data;

    // Проверка какое направление выбрано + добавление времени рейсов + удаление всех составляющих выбора направления
    if (data == 'из A в B') {
      // if ()
      let newSelect = newTime + timeAToB + takeTime;
      d2.insertAdjacentHTML('afterend', `${newSelect}`);
      d2.remove();
      del1.remove();
      del2.remove();
    }
    if (data == 'из B в A') {
      let newSelect = newTime + timeBToA + takeTime;
      d2.insertAdjacentHTML('afterend', `${newSelect}`);
      d2.remove();
      del1.remove();
      del2.remove();
    }
    if (data == 'из A в B и обратно в А') {
      let newSelect = newTime + timeBToA + takeTime;
      d2.insertAdjacentHTML('afterend', `${newSelect}`);
      let del3 = document.querySelector('.time_del');
      newSelect = newTime + timeAToB;
      d2.insertAdjacentHTML('afterend', `${newSelect}`);
      d2.remove();
      del1.remove();
      del2.remove();
      document.querySelector('.time').addEventListener('click', () => {
        let data1 = document.querySelector('.time').value;
        let del4 = document.querySelector('.time_del_1');

        // Удаляет второй селект, который создается при изменении первого селекта
        if (del4) {
          del4.remove();
        }

        del3.remove();
        if (data1 == '18:30(из A в B)') {
          const d3 = document.querySelector('.next_div');
          d3.insertAdjacentHTML('beforebegin', `${timeTo1830}`);
        }
        if (data1 == '18:00(из A в B)') {
          const d3 = document.querySelector('.next_div');
          d3.insertAdjacentHTML('beforebegin', `${timeTo18}`);
        }
        if (
          data1 == '18:45(из A в B)' ||
          data1 == '19:00(из A в B)' ||
          data1 == '19:15(из A в B)'
        ) {
          const d3 = document.querySelector('.next_div');
          d3.insertAdjacentHTML('beforebegin', `${timeTo1845}`);
        }
        if (data1 == '21:00(из A в B)') {
          const d3 = document.querySelector('.next_div');
          d3.insertAdjacentHTML('beforebegin', `${timeTo21}`);
        }
      });
    }

    // Кнопка расчета стоимости всей поездки и создание финального текста
    document.querySelector('.next_div').addEventListener('click', () => {
      const d3 = document.querySelector('.next_div');
      d3.insertAdjacentHTML('afterend', `${bill}`);
      d3.remove();
      const del6 = document.querySelector('.b-2');
      del6.addEventListener('click', () => {
        del6.remove();
        let data = +document.querySelector('.numb').value;
        let checkBlock = document
          .getElementById('block_id')
          .getElementsByTagName('select').length;
        let allBill = 0;
        let allTime = 0;

        // Проверка в одну или туда-обратно билеты. Расчет времени и стоимости
        if (checkBlock == 1) {
          allBill = data * priceForOneWay;
          allTime = roadTime;
        }
        if (checkBlock != 1) {
          allBill = data * priceForTwoWays;
          allTime = roadTime * 2;
        }

        let finalText = `<div class="final" id='final'>Вы выбрали ${data} билета по маршруту ${checkWay} стоимостью ${allBill}.<br>Это путешествие займет у вас ${allTime} минут.</div>`;

        document
          .getElementById('block_id')
          .insertAdjacentHTML('beforeend', `${finalText}`);
      });
    });
  });
};

d1.addEventListener('click', choiceWay);
