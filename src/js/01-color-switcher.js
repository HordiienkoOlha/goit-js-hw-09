const bodyColor = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let logger = null;

btnStart.addEventListener('click', () => {
  logger = setInterval(
    () => {
      bodyColor.style.backgroundColor = getRandomHexColor();
    },
    1000,
    1000,
  );
  btnStart.setAttribute('disabled', true);
});

btnStop.addEventListener('click', () => {
  clearInterval(logger);
  btnStart.removeAttribute('disabled');
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
