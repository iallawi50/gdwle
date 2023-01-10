// <article>
//   <h5>اسم المادة</h5>
//   <span>من الساعة 10:30 صباحاً</span>
//   <span>الى الساعة 10:30 صباحاً</span>
// </article>

function weekLeacture(title, from, to, build, theClass, id, day) {
  let article = document.createElement("article");
  let paddingArticle = document.createElement("div");
  let h5 = document.createElement("h5");
  article.setAttribute("key", id);
  h5.append(title);
  paddingArticle.appendChild(h5);

  let span1 = document.createElement("span");
  let span2 = document.createElement("span");
  let span3 = document.createElement("span");
  let span4 = document.createElement("span");

  span1.append(`من الساعة ${from}`);
  span2.append(`الى الساعة ${to}`);

  span3.append(`مبنى : ${build} `);
  span4.append(`قاعة : ${theClass}`);

  paddingArticle.appendChild(span1);
  paddingArticle.appendChild(span2);

  paddingArticle.appendChild(span3);
  paddingArticle.appendChild(span4);

  article.appendChild(paddingArticle);

  paddingArticle.style.padding = "10px";
  let settings = document.createElement("div");
  settings.style.background = "#eee";
  settings.style.width = "100%";
  settings.style.height = "35px";
  settings.style.borderRadius = "0 0 5px 5px";

  settings.className = "settingsLecture";

  let editLecture = document.createElement("form");

  editLecture.action = "editLecture.html";
  editLecture.method = "GET";
  editLecture.classList.add("editLecture", `form-${id}`);

  // INPUTS

  let editDay = document.createElement("input");
  editDay.value = day;
  editDay.name = "day";
  editDay.setAttribute("hidden", "hidden");
  editLecture.appendChild(editDay);

  let editID = document.createElement("input");
  editID.value = id;
  editID.name = "id";
  editID.setAttribute("hidden", "hidden");
  editLecture.appendChild(editID);
  // INPUTS

  let editLectureIcon = document.createElement("i");
  editLectureIcon.classList.add("fa-solid", "fa-pen-to-square", "editIcon");

  let deleteLecture = document.createElement("div");

  deleteLecture.classList = "deleteLecture";
  deleteLecture.setAttribute("key", id);
  editLecture.setAttribute("key", id);
  let deleteLectureIcon = document.createElement("i");
  deleteLectureIcon.classList.add(
    "fa-solid",
    "fa-calendar-minus",
    "deleteIcon"
  );

  deleteLecture.append("حذف");
  editLecture.appendChild(editLectureIcon);
  editLecture.append("تعديل");
  deleteLecture.appendChild(deleteLectureIcon);

  editLecture.addEventListener("click", () => {
    document.querySelector(`.${day} .form-${id}`).submit();
  });
  article.appendChild(settings);
  settings.appendChild(editLecture);
  settings.appendChild(deleteLecture);
  return article;
}

function loadLeacture(day) {
  let array = week[day];
  bblSort(array)
  let select = document.querySelector(`.${day} .day .lectures`);
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let elementId = document.querySelector(`.${day} .day .lectures`).children
      .length;
    select.appendChild(
      weekLeacture(
        element.title,
        element.from,
        element.to,
        element.build,
        element.theClass,
        elementId,
        day
      )
    );
    let btnDelete = document.querySelector(
      `.${day} .deleteLecture[key='${elementId}']`
    );
    btnDelete.addEventListener("click", () => {
      deleteLecture(day, elementId);
    });
  }
  // console.log(document.querySelector(`.${day} .day .lectures`).children.length);
}

function deleteLecture(day, id) {
  showAlertWarning(week[day][id].title, id, day);
}

loadLeacture("sun");
loadLeacture("mon");
loadLeacture("tues");
loadLeacture("wed");
loadLeacture("thurs");

function showAlertWarning(title, id, day) {


  setTimeout(() => {
    document.body.style.overflow = "hidden";
    let alert = document.querySelector(".alert");
    alert.style.display = "block";

    document.querySelector(".alert h3 span").style.color = "var(--mainColor)";
    document.querySelector(".alert h3 span").textContent = title;
    document
      .querySelector(".alert .cancelDelete")
      .addEventListener("click", () => {
        alert.style.display = "none";
        document.body.style.overflow = "auto";
      });
    document
      .querySelector(".alert .confirmDelete")
      .addEventListener("click", () => {
        console.log(week[day].splice(id, 1));
        let select = document.querySelector(`.${day} .day .lectures`);
        while (select.hasChildNodes()) {
          console.log(select.childNodes[0].remove());
        }
        loadLeacture(day)
        window.localStorage.week = JSON.stringify(week);

        alert.style.display = "none";
        document.body.style.overflow = "auto";
      });
  }, 100);
}
