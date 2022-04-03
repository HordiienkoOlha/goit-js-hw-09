import { getRandomHexColor } from './helpers/getRandomHexColor';
const bodyColor = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let logger = null;

function setupInt() {
  logger = setInterval(
    () => {
      bodyColor.style.backgroundColor = getRandomHexColor();
    },
    1000,
    1000,
  );
  btnStart.setAttribute('disabled', true);
}
function clearInt() {
  clearInterval(logger);
  btnStart.removeAttribute('disabled');
}
btnStart.addEventListener('click', setupInt);

btnStop.addEventListener('click', clearInt);
