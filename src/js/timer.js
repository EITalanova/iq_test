let ms = 600000;

export function updateTimer() {
  let interval = setInterval(function () {
    ms = ms - 1000;
    const { minutes, seconds } = convertMs(ms);

    time({ minutes, seconds });
    if (ms === 0) {
      clearInterval(interval);
      return;
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;

  const minutes = Math.floor(ms / minute);
  const seconds = Math.floor((ms % minute) / second);

  return { minutes, seconds };
}

function time({ minutes, seconds }) {
  const min = document.querySelector('.min');
  const sec = document.querySelector('.sec');

  min.textContent = addLeadingZero(minutes);
  sec.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  if (String(value).length <= 1) {
    return String(value).padStart(2, '0');
  }
  return `${value}`;
}
