let clockTime = () => {
  let time = new Date();
  let hours = time.getHours();
  let minute = time.getMinutes();
  let seconds = time.getSeconds();
  // let hours = 12;
  // let minute = 0;
  // let seconds = 0;
  let intervalTime = "AM";
  let h1 = document.querySelector("h1");
  let div = document.querySelector("div");

  switch (true) {
    case hours == 0:
      console.log(hours);
      h1.innerText = "Midnight";
      document.body.classList.add("midnight");
      nightStyle();
      break;
    case hours >= 0 && hours < 6:
      h1.innerText = "Midnight";
      document.body.classList.add("midnight");
      nightStyle();
      break;
    case hours >= 6 && hours < 12:
      h1.innerText = "Good morning";
      document.body.classList.add("sunrise");
      dayStyle();
      break;
    case hours >= 12 && hours < 18:
      document.body.classList.add("afternoon");
      h1.innerText = "Good Afternoon";
      dayStyle();
      break;
    case hours >= 18 && hours < 21:
      h1.innerText = "Good Evening";
      document.body.classList.add("night");
      nightStyle();
      break;
    case hours >= 21 && hours < 24:
      h1.innerText = "Good night";
      document.body.classList.add("midnight");
      nightStyle();
      break;
  }
  function dayStyle() {
    h1.classList.remove("nightStyle");
    h1.classList.add("dayStyle");
    div.classList.remove("nightClock");
    div.classList.add("MyClockDisplay");
  }
  function nightStyle() {
    h1.classList.remove("dayStyle");
    h1.classList.add("nightStyle");
    div.classList.remove("MyClockDisplay");
    div.classList.add("nightClock");
  }
  function valid(t) {
    if (t < 10) {
      return `0${t}`;
    }
    return t;
  }
  if (hours > 12) {
    hours = hours - 12;
    intervalTime = "PM";
  }
  if (hours == 12) {
    intervalTime = "PM";
  }
  if (hours == 0) {
    hours = 12;
  }

  hours = valid(hours);
  minute = valid(minute);
  seconds = valid(seconds);

  div.innerText = `${hours}:${minute}:${seconds} ${intervalTime}`;
};

setInterval(clockTime, 1000);
