function date() {
  const now = new Date();
  // define seconds
  const secondsDegree = now.getSeconds() * 6 + 90;
  const seconds = document.querySelector(".seconds-hand");
  seconds.style.transform = `rotate(${secondsDegree}deg)`;
  if (secondsDegree == 90) seconds.style.transition = 'none';
  else {
    seconds.style.transition = 'all 0.4s';
    seconds.style.transitionTimingFunction = 'cubic-bezier(0.290, 1.850, 0.710, 0.785)';
  }
  // define minutes
  const minutesDegree = now.getMinutes() * 6 + 90;
  const minutes = document.querySelector(".min-hand");
  minutes.style.transform = `rotate(${minutesDegree}deg)`;
  // define hours
  let i = 0;
  if (minutesDegree > 90) {
    i = (minutesDegree - 90) * 30 / 360;
  } else i = 0;
  const hoursDegree = now.getHours() * 30 + 90 + i;
  const hours = document.querySelector(".hour-hand");
  hours.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(date, 1000);
