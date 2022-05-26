const banner = document.getElementById("main_banner");
const imgArr = [
  "img/index/main_banner/paint.jpg",
  "img/index/main_banner/dessert.jpg",
  "img/index/main_banner/beverage.jpg",
  "img/index/main_banner/towsome_heart.jpg",
  "img/index/main_banner/cake.jpg",
];

banner.setAttribute("src", imgArr[0]);

a = 0;
function next_img() {
  if (a < imgArr.length - 1) {
    banner.setAttribute("src", imgArr[++a]);
  } else if (a == imgArr.length - 1) {
    a = 0;
    banner.setAttribute("src", imgArr[0]);
  }

  updateIndicator();
}

b = imgArr.length - 1;
function prev_img() {
  if (b > 0) {
    banner.setAttribute("src", imgArr[--b]);
  } else if (b == 0) {
    b = imgArr.length - 1;
    banner.setAttribute("src", imgArr[imgArr.length - 1]);
  }

  updateIndicator();
}

const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

btn0.addEventListener("click", () => {
  banner.setAttribute("src", imgArr[0]);
  updateIndicator();
});
btn1.addEventListener("click", () => {
  banner.setAttribute("src", imgArr[1]);
  updateIndicator();
});
btn2.addEventListener("click", () => {
  banner.setAttribute("src", imgArr[2]);
  updateIndicator();
});
btn3.addEventListener("click", () => {
  banner.setAttribute("src", imgArr[3]);
  updateIndicator();
});
btn4.addEventListener("click", () => {
  banner.setAttribute("src", imgArr[4]);
  updateIndicator();
});

function updateIndicator() {
  let bannerSRC = banner.getAttribute("src");
  switch (bannerSRC) {
    case "img/index/main_banner/paint.jpg":
      btn0.innerText = "●";
      btn1.innerText = "○";
      btn2.innerText = "○";
      btn3.innerText = "○";
      btn4.innerText = "○";
      break;
    case "img/index/main_banner/dessert.jpg":
      btn0.innerText = "○";
      btn1.innerText = "●";
      btn2.innerText = "○";
      btn3.innerText = "○";
      btn4.innerText = "○";
      break;
    case "img/index/main_banner/beverage.jpg":
      btn0.innerText = "○";
      btn1.innerText = "○";
      btn2.innerText = "●";
      btn3.innerText = "○";
      btn4.innerText = "○";
      break;
    case "img/index/main_banner/towsome_heart.jpg":
      btn0.innerText = "○";
      btn1.innerText = "○";
      btn2.innerText = "○";
      btn3.innerText = "●";
      btn4.innerText = "○";
      break;
    case "img/index/main_banner/cake.jpg":
      btn0.innerText = "○";
      btn1.innerText = "○";
      btn2.innerText = "○";
      btn3.innerText = "○";
      btn4.innerText = "●";
      break;
  }
}

setInterval(next_img, 3000);
