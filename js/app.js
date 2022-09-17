// Week
let week;
if (window.localStorage.background && window.localStorage.color) {
  document.body.style.background = window.localStorage.background;
  document.body.style.color = window.localStorage.color;
}

if (window.localStorage.week) {
  week = JSON.parse(window.localStorage.week);
} else {
  week = {
    sun: [],
    mon: [],
    tues: [],
    wed: [],
    thurs: [],
  };
}

function convertHourToMinute(now, time) {
  // lecture time
  let t = time.split(" ");

  if (t[1] === "مساءًا" && t[0].split(":")[0] != "12") {
    var hour = +t[0].split(":")[0] + 12;
    hour *= 60;

    var toMinute = hour + +t[0].split(":")[1];
  } else if (t[0].split(":")[0] == "12" && t[1] === "صباحاً") {
    hour = 0;
    var toMinute = hour + +t[0].split(":")[1];
  } else {
    var hour = +t[0].split(":")[0];
    hour *= 60;
    var toMinute = hour + +t[0].split(":")[1];
  }

  // current time

  let timeNow = now.split(":");

  let timeNowToMinute = +timeNow[0] * 60 + +timeNow[1];

  return toMinute - timeNowToMinute;
}

function checkDate(from) {
  // lecture time
  let t = from.split(" ");

  if (t[1] === "مساءًا" && t[0].split(":")[0] != "12") {
    var hour = +t[0].split(":")[0] + 12;
    hour *= 60;

    var toMinute = hour + +t[0].split(":")[1];
  } else {
    var hour = +t[0].split(":")[0];
    hour *= 60;
    var toMinute = hour + +t[0].split(":")[1];
  }

  return toMinute;
}
