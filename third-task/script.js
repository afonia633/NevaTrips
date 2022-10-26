'use strict';

let barcodeObj = [];
let barcodeArr = [];
let barcodeCreator = [];

const ticketTable = [
  {
    id: '1',
    event_id: '003',
    event_date: '2021-08-21 13:00:00',
    ticket_adult_price: '700',
    ticket_adult_quantity: '4',
    ticket_kid_price: '450',
    ticket_kid_quantity: '0',
    ticket_preferential_price: '0',
    ticket_preferential: '0',
    ticket_group_price: '0',
    ticket_group: '0',
    barcode: '',
    user_id: '00451',
    equal_price: '700',
    created: '2021-01-11 13:22:09',
  },
  {
    id: '2',
    event_id: '006',
    event_date: '2021-07-29 18:00:00',
    ticket_adult_price: '1000',
    ticket_adult_quantity: '0',
    ticket_kid_price: '800',
    ticket_kid_quantity: '2',
    ticket_preferential_price: '0',
    ticket_preferential: '0',
    ticket_group_price: '0',
    ticket_group: '0',
    barcode: '',
    user_id: '00364',
    equal_price: '1600',
    created: '2021-01-12 16:62:08',
  },
  {
    id: '3',
    event_id: '003',
    event_date: '2021-08-15 17:00:00',
    ticket_adult_price: '700',
    ticket_adult_quantity: '4',
    ticket_kid_price: '450',
    ticket_preferential_price: '0',
    ticket_kid_quantity: '3',
    ticket_preferential: '0',
    ticket_group_price: '0',
    ticket_group: '0',
    barcode: '',
    user_id: '00015',
    equal_price: '4150',
    created: '2021-01-13 10:08:45',
  },
];

// Создает таблицу из массива
function generateTable3() {
  let arr = Object.keys(ticketTable[0]);
  let b = 0;
  const tbl = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
  const tr = document.createElement('tr');
  let arr2 = ticketTable[b];

  // console.log(barcodeObj);
  tbl.appendChild(thead);
  tbl.appendChild(tbody);
  document.getElementById('body').appendChild(tbl);

  // Создаю первую строку с названиями колонок
  function firstRow() {
    for (let j = 0; j < arr.length; j++) {
      const cell = document.createElement('th');
      const cellText = document.createTextNode(`${arr[j]}`);

      cell.appendChild(cellText);
      tr.appendChild(cell);
    }
    thead.appendChild(tr);
  }

  firstRow();

  // Создает barcode для билетов
  function createBarcode() {
    let arr4 = [
      'ticket_adult_quantity',
      'ticket_kid_quantity',
      'ticket_preferential',
      'ticket_group',
    ];
    let numBarcode = '';
    if (arr2.id.length == 1) {
      numBarcode = '0' + `${arr2.id}`;
    } else {
      numBarcode = `${arr2.id}`;
    }

    for (let i = 0; i < arr4.length; i++) {
      let l = arr2;
      let people = String(arr4[i]);
      let newL = +l[people];

      // Если в поле есть хотя бы 1 билет, то начинает генирировать баркод
      if (newL >= 1) {
        for (let i = 1; i < newL + 1; i++) {
          // Стоит заменить 4 if на строку с активным изменением условий проверки
          if (people == 'ticket_adult_quantity') {
            let newBar = numBarcode + `0${i}` + `00000`;
            barcodeArr.push(newBar);
          }
          if (people == 'ticket_kid_quantity') {
            let newBar = numBarcode + `00` + `0${i}` + `000`;
            barcodeArr.push(newBar);
          }
          if (people == 'ticket_preferential') {
            let newBar = numBarcode + `00` + `00` + `0${i}` + `0`;
            barcodeArr.push(newBar);
          }
          if (people == 'ticket_group') {
            let newBar = numBarcode + `00` + `00` + `00` + `${i}`;
            barcodeArr.push(newBar);
          }
        }
      }
    }
  }

  // Создаю все остальные строки таблицы
  function allRows() {
    for (let i = 0; i < ticketTable.length; i++) {
      let row = document.createElement('tr');
      arr2 = ticketTable[b];

      createBarcode();
      barcodeObj.push({ ...barcodeArr });
      barcodeCreator = barcodeObj[i];

      for (let k = 0; k < arr.length; k++) {
        let g = arr[k];

        if (g == 'barcode') {
          let td = document.createElement('td');
          let count = 0;
          for (let key in barcodeCreator) {
            count++;
          }
          // Добавляет массив баркодов
          for (let u = 0; u < count; u++) {
            let cellTd = document.createTextNode(barcodeCreator[u] + `, `);
            td.appendChild(cellTd);
          }
          row.appendChild(td);
          continue;
        }

        let td = document.createElement('td');
        let cellTd = document.createTextNode(`${arr2[g]}`);

        td.appendChild(cellTd);
        row.appendChild(td);
      }
      b++;
      tbody.appendChild(row);

      barcodeArr = [];
    }
  }
  allRows();

  tbl.setAttribute('border', '2');
}

generateTable3();
