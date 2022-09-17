document.querySelector("button.pastejson").addEventListener("click", () => {
  let value = document.querySelector("textarea.pastejson").value;



  if (value[0] === "{" && value[value.length - 1] === "}") {
    showAlertSuccess("تم تحديث الجدول");
    document
      .querySelector(".alert .okay")
      .addEventListener("click", function () {
        window.location.href = "index.html";
      });
      
    window.localStorage.week = value;


  } else {
    showAlertError("الرجاء التحقق من البيانات");
  }
});
