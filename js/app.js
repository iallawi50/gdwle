let weekDays = ["sun", "mon", "tues", "wed", "thurs"];

function minute(time) {
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

  return toMinute;
}

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
function bblSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (minute(arr[j].from) > minute(arr[j + 1].from)) {
        // If the condition is true then swap them
        // var temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;

        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  // Print the sorted array
  week[element] = bblSort(week[element]);
  if (element == "thurs") {
    window.localStorage.week = JSON.stringify(week);
  }
  console.log(arr);
}

function showAlertSuccess(title) {
  scrollTo(0, 0);

  document
    .querySelector(".alert i")
    .classList.add("fa-circle-check", "alertSucess");

  document.querySelector(".alert h3").textContent = title;

  document.body.style.overflow = "hidden";
  let alert = document.querySelector(".alert");
  alert.style.display = "block";
  // document.querySelectorAll("input").forEach((el) => {
  //   el.value = "";
  // });

  // document.querySelectorAll("select option:first-child").forEach((el) => {
  //   el.selected = true;
  // });

  document.querySelector(".alert button").addEventListener("click", () => {
    alert.style.display = "none";
    document.body.style.overflow = "auto";

    document
      .querySelector(".alert i")
      .classList.remove("fa-circle-check", "alertSucess");
  });
}

function showAlertError(title) {
  scrollTo(0, 0);
  document
    .querySelector(".alert i")
    .classList.add("fa-circle-xmark", "alertError");

  document.querySelector(".alert h3").textContent = title;

  document.body.style.overflow = "hidden";
  let alert = document.querySelector(".alert");
  alert.style.display = "block";

  document.querySelector(".alert button").addEventListener("click", () => {
    alert.style.display = "none";
    document.body.style.overflow = "auto";

    document
      .querySelector(".alert i")
      .classList.remove("fa-circle-xmark", "alertError");
  });
}
