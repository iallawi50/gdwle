let ad = false;
let logocopyright = true;
 

if (logocopyright) {
  let a = document.createElement("a");
  a.href = "https://ali-hussain.sa";
  a.target = "_blank";
  a.style.position = "fixed";
  a.style.bottom = "30px";
  a.style.left = "30px";
  a.style.width = "60px";
  a.style.height = "60px";
  a.style.zIndex = "9999999";
  a.style.borderRadius = "50%";
  a.style.overflow = "hidden";

  let img = document.createElement("img");
  img.src = "https://ali-hussain.sa/imgs/logo.png";
  img.style.width = "100%";
  a.appendChild(img);
  document.body.append(a);
}



let divAd = document.createElement("div");
divAd.classList.add("container", "ads");

aAd = document.createElement("a");
aAd.href = "https://instagram.com/firecode.sa";

imgAd = document.createElement("img");
imgAd.src = "imgs/ADS/youtube-prem.jpg";

aAd.appendChild(imgAd);

divAd.appendChild(aAd);

if (ad) {
  document.body.prepend(divAd);
}

// Navbar

let nav = document.createElement("nav");
nav.classList.add("container");
document.body.prepend(nav);

addLink("/", "الرئيسية");
addLink("today.html", "جدول اليوم");
addLink("week.html", "جدول الاسبوع");
addLink("settings.html", "الاعدادات");
// Functions

// Create Link navbar
function addLink(link, name) {
  let a = document.createElement("a");
  a.href = link;
  a.append(name);
  nav.appendChild(a);
}

// <div class="container ads">
//   <a href="https://instagram.com/firecode.sa">
//     <img src="imgs/ADS/youtube-prem.jpg" alt="" />
//   </a>
// </div>;

// loading

let loading = document.createElement("div");
loading.classList.add("loading");
loading.style.transition = "0.2s";
loading.style.background = "#fff";
loading.style.position = "fixed";
loading.style.top = 0;
loading.style.left = 0;
loading.style.width = "100%";
loading.style.height = "100vh";
loading.style.zIndex = 9999;

let logoDiv = document.createElement("div");

let img = document.createElement("img");
img.src = "/imgs/tvtc.jpg";
img.style.width = "80px";
let progClub = document.createElement("h3");
progClub.append("نادي المبرمجين");
progClub.style.color = "var(--mainColor)";

logoDiv.appendChild(progClub);
logoDiv.appendChild(img);

logoDiv.style.display = "flex";
logoDiv.style.justifyContent = "space-between";
logoDiv.style.alignItems = "center";
logoDiv.style.margin = "30px";

loading.appendChild(logoDiv);

let logo = document.createElement("img");

logo.src = "/imgs/logo.png";

logo.style.width = "150px";
logo.style.position = "absolute";
logo.style.top = "50%";
logo.style.left = "50%";
logo.style.transform = "translate(-50%, -50%)";

loading.appendChild(logo);

let copyright = document.createElement("h4");
copyright.style.color = "#777";
copyright.style.position = "absolute";
copyright.style.left = "50%";
copyright.style.transform = "translateX(-50%)";
copyright.style.textAlign = "center";
copyright.style.bottom = "180px";
copyright.append("برمجة وتصميم");
loading.appendChild(copyright);

let copyrightName = document.createElement("h4");
copyrightName.style.color = "#777";
copyrightName.style.position = "absolute";
copyrightName.style.left = "50%";
copyrightName.style.transform = "translateX(-50%)";
copyrightName.style.textAlign = "center";
copyrightName.style.bottom = "150px";
copyrightName.append("علي حسين العبدالله");
loading.appendChild(copyrightName);


document.body.appendChild(loading);

setTimeout(() => {
  loading.style.opacity = "0%";
  document.body.style.overflow = "auto";
  setTimeout(() => {
    loading.remove();
  }, 500);
}, 1200);
