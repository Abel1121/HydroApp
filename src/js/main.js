"use strict";

import { get } from "https";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const buttonAdd = document.querySelector('.button-add--js');
const buttonRemove = document.querySelector('.button-remove--js');
const buttonAddCola = document.querySelector('.button-add-cola--js');
const buttonRemoveCola = document.querySelector('.button-remove-cola--js');
const value_water = document.querySelector('.counter-water__value--js');
const value_cola = document.querySelector('.counter-cola__value--js');
const buttonHistoryAdd = document.querySelector('.history__button_open-js');
const buttonHistoryRemove = document.querySelector('.history__button__close-js');
const tableBody = document.querySelector('.table__body--js');
const historyTable = document.querySelector('.history');
const key = new Date().toISOString().slice(0, 10);

let glasses = {
  water: 0,
  cola: 0
  }


//water
if (!localStorage.getItem(key, JSON.stringify(glasses))) {
  localStorage.setItem(key, JSON.stringify(glasses))
  value_water.innerHTML = '0';
} else {
  value_water.innerHTML = JSON.parse(localStorage[key]).water;
}

buttonAdd.addEventListener('click', (e) => {
  glasses.water = JSON.parse(localStorage[key]).water + 1
  glasses.cola = JSON.parse(localStorage[key]).cola
localStorage.setItem(key, JSON.stringify(glasses))
console.log(glasses)
value_water.innerHTML = JSON.parse(localStorage[key]).water
});

buttonRemove.addEventListener('click', (e) => {
  const currentValue = JSON.parse(localStorage[key]).water;
  if (currentValue > 0) {
    glasses.water = JSON.parse(localStorage[key]).water - 1
    glasses.cola = JSON.parse(localStorage[key]).cola
    console.log(glasses)
    localStorage.setItem(key, JSON.stringify(glasses))
    value_water.innerHTML = JSON.parse(localStorage[key]).water
  };
})
// // cola

if (!localStorage.getItem(key, JSON.stringify(glasses))) {
  localStorage.setItem(key, JSON.stringify(glasses))
  value_cola.innerHTML = '0';
} else {
  value_cola.innerHTML = JSON.parse(localStorage[key]).cola;
}

buttonAddCola.addEventListener('click', (e) => {
  glasses.cola = JSON.parse(localStorage[key]).cola + 1
  glasses.water = JSON.parse(localStorage[key]).water
localStorage.setItem(key, JSON.stringify(glasses))
console.log(glasses)
value_cola.innerHTML = JSON.parse(localStorage[key]).cola
})

buttonRemoveCola.addEventListener('click', (e) => {
  const currentValue = JSON.parse(localStorage[key]).cola;
  if (currentValue > 0) {
    glasses.cola = JSON.parse(localStorage[key]).cola - 1
    glasses.water = JSON.parse(localStorage[key]).water
    console.log(glasses)
    localStorage.setItem(key, JSON.stringify(glasses))
    value_cola.innerHTML = JSON.parse(localStorage[key]).cola
  };
});

//hisotry
buttonHistoryAdd.addEventListener('click', (e) => {
  historyTable.classList.add('history__visible');
});

  tableBody.innerHTML = "";
for( let i = 0 ; i < localStorage.length ; i++) {
  const localStorageValue = localStorage.getItem(localStorage.key(i));
  const localStoragedate = localStorage.key(i);
  tableBody.innerHTML += `
    <tr>
      <td>${localStoragedate}</td>
      <td>${JSON.parse(localStorage[key]).cola}</td>
      <td>${JSON.parse(localStorage[key]).water}</td>
    </tr>
  `
}

buttonHistoryRemove.addEventListener('click', e => {
  historyTable.classList.remove('history__visible');
})