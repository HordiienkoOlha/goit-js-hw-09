import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// import { format } from 'date-fns';
// import { uk } from 'date-fns/locale';
const calendarInput = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
// console.log(dataDays);
// console.log(dataHours);
// console.log(dataMinutes);
// console.log(dataSeconds);
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
      buttonStart.setAttribute('disabled', true);
    }
    console.log(selectedDates[0]);
    console.log(Date.now());
  },
};
const fp = flatpickr(calendarInput, options);

buttonStart.addEventListener('click', () => {
  console.log('клик');
});
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
