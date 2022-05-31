const banner = document.getElementById("main_banner");
const imgArr = [
  "img/index/main_banner/paint.jpg",
  "img/index/main_banner/dessert.jpg",
  "img/index/main_banner/beverage.jpg",
  "img/index/main_banner/towsome_heart.jpg",
  "img/index/main_banner/cake.jpg",
];

function viewBanner(arr) {
  document.getElementById("main_banner").setAttribute("src", imgArr[0]);
}

const imgLt = document.getElementById("btn_left");
const imgRt = document.getElementById("btn_rignt");

leftBtn.addEventListener("click", () => currentImgArray(-1));
rightBtn.addEventListener("click", () => currentImgArray(1));

function currentImgArray(dir) {
  if (dir > 0) {
    imgArr = imgArr.slice(1).concat(slice(0, 1));
  } else if (dir < 0) {
    imgArr = imgArr.slice(-1).concat(slice(0, 3));
  } else {
  }

  viewBanner(imgArr.slice(0));
}

viewBanner(imgArr.slice(0));
// banner.setAttribute("src", imgArr[0]);

// vimg = 0;
// function next_img() {
//   if (vimg < imgArr.length - 1) {
//     banner.setAttribute("src", imgArr[++vimg]);
//   } else if (vimg == imgArr.length - 1) {
//     vimg = 0;
//     banner.setAttribute("src", imgArr[0]);
//   }

//   updateIndicator();
// }

// function prev_img() {
//   if (vimg > 0) {
//     banner.setAttribute("src", imgArr[--vimg]);
//   } else if (vimg == 0) {
//     vimg = imgArr.length - 1;
//     banner.setAttribute("src", imgArr[imgArr.length - 1]);
//   }

//   updateIndicator();
// }

// const btn0 = document.getElementById("btn0");
// const btn1 = document.getElementById("btn1");
// const btn2 = document.getElementById("btn2");
// const btn3 = document.getElementById("btn3");
// const btn4 = document.getElementById("btn4");

// btn0.addEventListener("click", () => {
//   banner.setAttribute("src", imgArr[0]);
//   updateIndicator();
// });
// btn1.addEventListener("click", () => {
//   banner.setAttribute("src", imgArr[1]);
//   updateIndicator();
// });
// btn2.addEventListener("click", () => {
//   banner.setAttribute("src", imgArr[2]);
//   updateIndicator();
// });
// btn3.addEventListener("click", () => {
//   banner.setAttribute("src", imgArr[3]);
//   updateIndicator();
// });
// btn4.addEventListener("click", () => {
//   banner.setAttribute("src", imgArr[4]);
//   updateIndicator();
// });

// function updateIndicator() {
//   let bannerSRC = banner.getAttribute("src");
//   btn0.innerText = "○";
//   btn1.innerText = "○";
//   btn2.innerText = "○";
//   btn3.innerText = "○";
//   btn4.innerText = "○";
//   switch (bannerSRC) {
//     case "img/index/main_banner/paint.jpg":
//       btn0.innerText = "●";
//       break;
//     case "img/index/main_banner/dessert.jpg":
//       btn1.innerText = "●";
//       break;
//     case "img/index/main_banner/beverage.jpg":
//       btn2.innerText = "●";
//       break;
//     case "img/index/main_banner/towsome_heart.jpg":
//       btn3.innerText = "●";
//       break;
//     case "img/index/main_banner/cake.jpg":
//       btn4.innerText = "●";
//       break;
//   }

//   runInterval();
// }

// setInterval(next_img, 3000);
