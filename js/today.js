// 👇️ from CURRENT DATE
var todayNow = new Date();
var current = todayNow.getHours() + ":" + todayNow.getMinutes();
setInterval(() => {
  todayNow = new Date();
  current = todayNow.getHours() + ":" + todayNow.getMinutes();
}, 500);
let date = new Date();
let today = String(date).split(" ")[0].toLocaleLowerCase();
let weekend = today == "fri" || today == "sat" ? true : false;
today = today == "tue" ? "tues" : today;
today = today == "wed" ? "wed" : today;
today = today == "thu" ? "thurs" : today;
let array = week[today];

if (!weekend) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    createLecture(
      element.title,
      element.from,
      element.to,
      element.build,
      element.theClass
    );
  }
} else {
  let alert = document.createElement("h3");
  alert.append("لاتوجد محاضرات لهذا اليوم");
  alert.style.textAlign = "center";
  alert.style.marginTop = "300px";
  document.body.appendChild(alert);
}
function createLecture(title, from, to, build, theClass) {
  let lecture = document.createElement("div");
  lecture.classList.add("lecture");

  let timeout = document.createElement("span");
  timeout.classList.add("timeout");

  var startLecture = convertHourToMinute(current, from);
  var endLecture = convertHourToMinute(current, to);
  var msgTime = "جارِ حساب الوقت";

  setInterval(() => {
    startLecture = convertHourToMinute(current, from);
    endLecture = convertHourToMinute(current, to);
    if (startLecture > 120) {
      msgTime = "تبدأ المحاضرة بعد اكثر من ساعتين";
      timeout.style.background = "#1f581f";
    } else if (startLecture == 120) {
      msgTime = "تبدأ المحاضرة بعد ساعتين";
      timeout.style.background = "#1f581f";
    } else if (startLecture < 120 && startLecture > 60) {
      msgTime = "تبدأ المحاضرة بعد اقل من ساعة";
      timeout.style.background = "#1f581f";
    } else if (startLecture == 60) {
      msgTime = "تبدأ المحاضرة بعد ساعة";
      timeout.style.background = "green";
    } else if (startLecture < 60 && startLecture > 30) {
      msgTime = `تبدأ المحاضرة بعد ${startLecture} دقيقة`;
      timeout.style.background = "green";
    } else if (startLecture <= 30 && startLecture > 10) {
      msgTime = `تبدأ المحاضرة بعد ${startLecture} دقيقة`;
      timeout.style.background = "#ffd402";
      timeout.style.color = "black";
    } else if (startLecture <= 10 && startLecture > 2) {
      msgTime = `تبدأ المحاضرة بعد ${startLecture} دقائق`;
    } else if (startLecture == 2) {
      msgTime = `تبدأ المحاضرة بعد دقيقتين`;
    } else if (startLecture == 1) {
      msgTime = `تبدأ المحاضرة بعد دقيقة`;
    } else if (startLecture <= 0 && startLecture >= -2) {
      timeout.style.background = "green";
      msgTime = `بدأت المحاضرة`;
    } else {
      msgTime = `متبقي على انتهاء المحاضرة ${endLecture} دقيقة`;
      timeout.style.background = "#414244";

      if (endLecture <= 10 && endLecture >= 3) {
        msgTime = `متبقي على انتهاء المحاضرة ${endLecture} دقائق`;
      } else if (endLecture == 2) {
        msgTime = `متبقي على انتهاء المحاضرة دقيقتين`;
      } else if (endLecture == 1) {
        msgTime = `متبقي على انتهاء المحاضرة دقيقة`;
      }
    }

    if (endLecture <= 0) {
      msgTime = "انتهت المحاضرة";
      timeout.style.background = "darkred";
    }

    timeout.textContent = msgTime;
  }, 1000);

  timeout.append(msgTime);

  lecture.appendChild(timeout);

  let theTitle = document.createElement("h3");
  theTitle.append(title);
  lecture.appendChild(theTitle);

  let description = document.createElement("div");
  description.classList.add("description");
  lecture.appendChild(description);

  let time = document.createElement("div");

  time.classList.add("time");

  let spanFrom = document.createElement("span");
  let spanTo = document.createElement("span");

  spanFrom.append(`من الساعة ${from}`);

  spanTo.append(`الى الساعة ${to}`);

  time.appendChild(spanFrom);
  time.appendChild(spanTo);

  description.appendChild(time);

  lecture.appendChild(description);

  let info = document.createElement("div");
  info.classList.add("info");

  let spanBuild = document.createElement("span");
  let spanClass = document.createElement("span");

  spanBuild.append(`مبنى ${build}`);
  spanClass.append(`قاعة ${theClass}`);

  info.appendChild(spanBuild);
  info.appendChild(spanClass);

  description.appendChild(info);
  //   lecture.appendChild(info);

  let container = document.querySelector("div.container");
  container.appendChild(lecture);
}
