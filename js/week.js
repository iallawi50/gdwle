

// <article>
//   <h5>اسم المادة</h5>
//   <span>من الساعة 10:30 صباحاً</span>
//   <span>الى الساعة 10:30 صباحاً</span>
// </article>

function weekLeacture(title, from, to, build , theClass) {
  let article = document.createElement("article");
  let h5 = document.createElement("h5");
  h5.append(title);
  article.appendChild(h5);

  let span1 = document.createElement("span");
  let span2 = document.createElement("span");
  let span3 = document.createElement("span");
  let span4 = document.createElement("span");

  
  span1.append(`من الساعة ${from}`);
  span2.append(`الى الساعة ${to}`);
  


  span3.append(`مبنى : ${build} `)
  span4.append(`قاعة : ${theClass}`)

  article.appendChild(span1);
  article.appendChild(span2);

  article.appendChild(span3);
  article.appendChild(span4);

  return article;
}

function loadLeacture(day) {
  let array = week[day];
  let select = document.querySelector(`.${day} .day .lectures`);
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    

    select.appendChild(weekLeacture(element.title, element.from, element.to, element.build, element.theClass));
  }
}

loadLeacture("sun");
loadLeacture("mon");
loadLeacture("tues");
loadLeacture("wed");
loadLeacture("thurs");
