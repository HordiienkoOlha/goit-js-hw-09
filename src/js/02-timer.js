import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// import { format } from 'date-fns';
// import { uk } from 'date-fns/locale';
const calendarInput = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button');

// console.log(dateNow);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onOpen() {
    buttonStart.setAttribute('disabled', true);
  },
  onClose(selectedDates) {
    buttonStart.removeAttribute('disabled');
    if (selectedDates[0] < Date.now()) {
      window.alert('Please choose a date in the future');
    }
    console.log(selectedDates[0]);
    console.log(Date.now());
  },
};
const fp = flatpickr(calendarInput, options);

buttonStart.addEventListener('click', () => {
  console.log('клик');
});
// const output = document.querySelector('.output');

// calendarInput.addEventListener('input', event => {
//   const userInput = event.currentTarget.value;
//   //   console.log('input');
//   console.log(userInput);
// });
