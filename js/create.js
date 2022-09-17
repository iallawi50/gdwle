let daysAr = ["الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس"];
let daysEn = ["sun", "mon", "tues", "wed", "thurs"];

// Create page

let day = document.querySelector(".day");
let fromHour = document.querySelector(".hour.from");
let fromMinute = document.querySelector(".minute.from");
let toHour = document.querySelector(".hour.to");
let toMinute = document.querySelector(".minute.to");

repeatTimeAndAppend(fromHour, 1, 12, true);
repeatTimeAndAppend(fromMinute, 0, 59, true);
repeatTimeAndAppend(toHour, 1, 12, true);
repeatTimeAndAppend(toMinute, 0, 59, true);
repeatTimeAndAppend(day, 0, daysAr.length - 1, false, daysAr);

function repeatTimeAndAppend(variable, start, end, addzero, array) {
  for (let i = start; i <= end; i++) {
    let opt = document.createElement("option");
    if (array === undefined) {
      if (addzero === true && i < 10) {
        if (i < 10) {
          opt.value = `0${i}`;
          opt.textContent = `0${i}`;
        }
      } else {
        opt.value = i;
        opt.textContent = i;
      }

      variable.appendChild(opt);
    } else {
      opt.value = daysEn[i];
      opt.textContent = daysAr[i];
      day.appendChild(opt);
    }
  }
}
let addBtn = document.querySelector(".addClass");

addBtn.addEventListener("click", function (e) {
  let title = document.querySelector("#title").value;
  let day = document.querySelector("#day").value;
  let theClass = document.querySelector("#class").value;
  let build = document.querySelector("#build").value;

  let from = `${fromHour.value}:${fromMinute.value} ${
    document.querySelector(".timeFrom").value
  }`;

  let to = `${toHour.value}:${toMinute.value} ${
    document.querySelector(".timeTo").value
  }`;


  



  if (
    title == "" ||
    theClass == "" ||
    build == "" ||
    fromHour.value == "" ||
    fromMinute.value == "" ||
    checkDate(to) - checkDate(from) <= 0 ||
    toHour.value == "" ||
    toMinute.value == ""
  ) {
    if (document.getElementById("removed")) {
      return false;
    }
    showAlertError("الرجاء التحقق من البيانات");

    return false;
  }

  showAlertSuccess("تمت اضافة المادة");

  week[day].push({
    title: title,
    theClass: theClass,
    build: build,
    day: day,
    from: from,
    to: to,
  });
  window.localStorage.week = JSON.stringify(week);
});

function showAlertSuccess(title) {
  scrollTo(0, 0);

  document
    .querySelector(".alert i")
    .classList.add("fa-circle-check", "alertSucess");

  document.querySelector(".alert h3").textContent = title;

  document.body.style.overflow = "hidden";
  let alert = document.querySelector(".alert");
  alert.style.display = "block";
  document.querySelectorAll("input").forEach((el) => {
    el.value = "";
  });

  document.querySelectorAll("select option:first-child").forEach((el) => {
    el.selected = true;
  });

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
