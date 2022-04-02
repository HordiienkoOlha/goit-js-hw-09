import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const calendarInput = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

// console.log(dataHours);
// console.log(dataMinutes);
// console.log(dataSeconds);
buttonStart.setAttribute('disabled', true);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    buttonStart.removeAttribute('disabled');
    if (selectedDates[0] < Date.now()) {
      window.alert('Please choose a date in the future');
      buttonStart.setAttribute('disabled', true);
    }
    buttonStart.addEventListener('click', () => {
      const deadline = selectedDates[0].getTime();

      // console.log(deadline);
      let timerId = null;

      function countDownTimer() {
        const dateDifference = convertMs(deadline - Date.now());

        // console.log(typeof dateDifference);
        const { days, hours, minutes, seconds } = dateDifference;
        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
          clearInterval(timerId);
        }
        // addLeadingZero(days, hours, minutes, seconds);
        dataDays.innerHTML = days;
        dataHours.innerHTML = hours;
        dataMinutes.innerHTML = minutes;
        dataSeconds.innerHTML = seconds;
        // console.log(dataDays);
      }
      countDownTimer();
      timerId = setInterval(countDownTimer, 1000);
      // if .length === 1 добавить методом ноль
      // 'abc'.padStart(2, "0");
      // if (days.length === 1) {
      //   console.log('o');
      // }
      // console.log(days.length);
    });

    // const selectDate = selectedDates[0].getTime();
    // console.log(selectDate);
    // console.log(Date.now());
  },
};
const fp = flatpickr(calendarInput, options);

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
// function addLeadingZero() {
//   value.padStart(2, '0');
// }
