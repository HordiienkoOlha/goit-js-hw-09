import throttle from 'lodash.throttle';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
console.log(form);

// for (let i = 0; i < amount; i=+1) {
//   const element = array[i];

// }
// buttonCreatePromises.addEventListener('click', bu);
// function b() {
// const delay = inputDelayRef.value;
// const step = inputStepRef.value;
// const amount = inputAmountRef.value;
// console.log(delay);
// console.log(step);
// console.log(amount);
//
// }
// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// const form = document.querySelector('.form');
// const STORAGE_KEY = 'feedback-promise';

// // const form = document.querySelector('.feedback-form');
// // const email = document.querySelector('.feedback-form  input');
// // const message = document.querySelector('.feedback-form  textarea');
// // const parcedItem = {};

// initForm();

// form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', throttle(changeForm, 500));

// function onFormSubmit(event) {
//   event.preventDefault();
//   //   // console.log('Form sent');
//   const formData = new FormData(form);
//   const { delay, step, amount } = form.elements;

//   formData.forEach(value => console.log(`${value}`));
//   event.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
//   console.log(form.elements.delay.v);

//   // console.log(formData);
// }
// function changeForm(event) {
//   let parcedItem = localStorage.getItem(STORAGE_KEY);
//   parcedItem = parcedItem ? JSON.parse(parcedItem) : {};
//   parcedItem[event.target.name] = event.target.value;

//   if (!parcedItem) return;

//   localStorage.setItem(STORAGE_KEY, JSON.stringify(parcedItem));
// }
// function initForm() {
//   let persistedItem = localStorage.getItem(STORAGE_KEY);
//   // console.log(parcedItem);

//   if (persistedItem) {
//     persistedItem = JSON.parse(persistedItem);
//     console.log(persistedItem);

//     Object.entries(persistedItem).forEach(([key, value]) => (form.elements[key].value = value));
//   }
// }
