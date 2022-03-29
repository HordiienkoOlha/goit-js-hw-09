const bodyColor = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
// console.log(btnStart);
const btnStop = document.querySelector('button[data-stop]');
// console.log(btnStop);

// const intervalId = setInterval(logger, 1000, 2000);

btnStart.addEventListener('click', () => {
  const logger = () => (bodyColor.style.backgroundColor = getRandomHexColor());
  setInterval(logger, 1000, 1000);
});
btnStop.addEventListener('click', () => {
  // bodyColor.style.backgroundColor = '#fafafa';
  // const intervalId = setInterval(logger, 1000, 2000),
  // clearInterval(logger),
  console.log('stop');
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// const timerId = setInterval(() => {
//  console.log(' ');
// }, 2000);
// setTimeout(() => {
clearInterval(timerId);
// }, 5000);
