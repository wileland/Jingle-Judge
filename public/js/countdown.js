// countdown.js
let days = document.querySelector(".days .number"),
  hours = document.querySelector(".hours .number"),
  minutes = document.querySelector(".minutes .number"),
  seconds = document.querySelector(".seconds .number");

let countDownDate = new Date("Dec 24, 2024 23:59:59").getTime();

let updateCountdown = () => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;

  let day = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hour = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minute = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((dateDiff % (1000 * 60)) / 1000);

  days.innerHTML = day < 10 ? `0${day}` : day;
  hours.innerHTML = hour < 10 ? `0${hour}` : hour;
  minutes.innerHTML = minute < 10 ? `0${minute}` : minute;
  seconds.innerHTML = second < 10 ? `0${second}` : second;

  if (dateDiff <= 0) {
    clearInterval(counter);
    days.innerHTML = "00";
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
  }
};

// Update the countdown immediately upon loading the page
updateCountdown();
let counter = setInterval(updateCountdown, 1000);
