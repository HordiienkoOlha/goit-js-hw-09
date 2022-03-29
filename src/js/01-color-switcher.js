const bodyColor = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
// console.log(btnStart);
const btnStop = document.querySelector('button[data-stop]');
// console.log(btnStop);
btnStart.addEventListener(
  'click',
  () => {
    bodyColor.style.backgroundColor = getRandomHexColor();
  },
  //   { once: true },
);
btnStop.addEventListener('click', () => {
  bodyColor.style.backgroundColor = '#fafafa';
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
