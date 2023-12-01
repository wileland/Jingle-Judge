let days = document.querySelector('.days .number'),
    hours = document.querySelector('.hours .number'),
    minutes = document.querySelector('.minutes .number'),
    seconds = document.querySelector('.seconds .number');

    countDownDate = new Date("Dec 24, 2023 23:59:59").getTime();

    let counter = setInterval(() => {
       let dateNow = new Date().getTime();
       let dateDiff = countDownDate - dateNow;
       
       let day = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
       let hour = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       let minute = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
       let second = Math.floor((dateDiff % (1000 * 60)) / 1000);

       days.innerHTML = day < 10 ? `0${day}` : day;
       hours.innerHTML = hour    < 10 ? `0${ hour }` : hour;
       minutes.innerHTML = minute < 10 ? `0${minute}` : minute;
       seconds.innerHTML = second < 10 ? `0${second}` : second;

       if (dateDiff == 0) {
        clearInterval(counter);
       }
    }, 1000);