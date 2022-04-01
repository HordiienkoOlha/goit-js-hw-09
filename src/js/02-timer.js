import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const calendarInput = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onOpen() {
    buttonStart.setAttribute('disabled', true);
  },
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    buttonStart.removeAttribute('disabled');
  },
};
const fp = flatpickr(calendarInput, options);
// buttonStart.addEventListener('click', () => {
//   console.log('клик');
// });
// const output = document.querySelector('.output');

// calendarInput.addEventListener('input', event => {
//   const userInput = event.currentTarget.value;
//   //   console.log('input');
//   console.log(userInput);
// });
