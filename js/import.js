import data from "./schedule.json" assert { type: "json" };
let res = data[0];

document.querySelector(".submitStdID").addEventListener("click", () => {
  let input = document.querySelector(".stdID").value;
  if (input.length != 9) {
    showAlertError("الرقم التدريبي غير صالح");
    return false;
  } else {
     week = res[`${input}`];
    window.localStorage.week = JSON.stringify(week);
    showAlertSuccess("تم استيراد الجدول بنجاح");
  }
});
