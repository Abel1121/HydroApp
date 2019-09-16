"use strict";

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
const key = new Date().toISOString().slice(0, 10) + " water";
const key2 = new Date().toISOString().slice(0, 10) + " cola";

//water
if (!localStorage.getItem(key)) {
  localStorage.setItem(key, 0)
  value_water.innerHTML = '0'
} else {
  value_water.innerHTML = localStorage.getItem(key);
}

buttonAdd.addEventListener('click', (e) => {
  localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);
  value_water.innerHTML = localStorage.getItem(key);
})

buttonRemove.addEventListener('click', (e) => {
  const currentValue = parseInt(localStorage.getItem(key));
  if (currentValue > 0) {
    localStorage.setItem(key, parseInt(localStorage.getItem(key)) -1);
    value_water.innerHTML = localStorage.getItem(key);
  };
})
// cola

if (!localStorage.getItem(key2)) {
  localStorage.setItem(key2, 0)
  value_cola.innerHTML = '0';
} else {
  value_cola.innerHTML = localStorage.getItem(key2);
}

buttonAddCola.addEventListener('click', (e) => {
  localStorage.setItem(key2, parseInt(localStorage.getItem(key2)) + 1)
  value_cola.innerHTML = localStorage.getItem(key2);
})

buttonRemoveCola.addEventListener('click', (e) => {
  const currentValue = parseInt(localStorage.getItem(key2));
  if (currentValue > 0) {
    localStorage.setItem(key2, parseInt(localStorage.getItem(key2)) -1)
    value_cola.innerHTML = localStorage.getItem(key2);
  }
})

//hisotry
buttonHistoryAdd.addEventListener('click', (e) => {
  historyTable.classList.add('history__visible');

  tableBody.innerHTML = "";
for( let i = 0 ; i < localStorage.length ; i++) {
  const localStorageValue = localStorage.getItem(localStorage.key(i))
  const localStoragedate = localStorage.key(i);
  tableBody.innerHTML += `
    <tr>
      <td>${localStoragedate}</td>
      <td>${localStorageValue}</td>
    </tr>
  `
}
})

buttonHistoryRemove.addEventListener('click', (e) => {
  historyTable.classList.remove('history__visible');
})