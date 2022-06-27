const bannerArr = [
  "img/index/main_banner/paint.jpg",
  "img/index/main_banner/dessert.jpg",
  "img/index/main_banner/cake.jpg",
  "img/index/main_banner/beverage.jpg",
  "img/index/main_banner/towsome_heart.jpg",
];

//----------------------------------------html생성----------------------------------------
// bContainer 생성
let bContainer = document.createElement("div");
// bContainer에 id 부여
bContainer.id = "banner_container";

// inner에 img파일 추가 X5
for (i = 0; i < bannerArr.length; i++) {
  // bImg 생성
  let bImg = document.createElement("img");
  // bImg에 진짜 img 꽂아 넣기
  bImg.setAttribute("src", bannerArr[i]);

  // bInner 생성
  bInner = document.createElement("div");
  // bInner 에 id부여
  bInner.id = "banner_inner_" + i;
  // bInner 에 class부여
  bInner.className = "banner_inner";
  // Binner에 bImg파일 추가
  bInner.appendChild(bImg);

  // #banner_container에 .banner_inner 추가
  bContainer.appendChild(bInner);
}

// .banner_wrapper에 #banner_container 추가
document.getElementsByClassName("banner_wrapper")[0].appendChild(bContainer);
//----------------------------------------html생성----------------------------------------

// for (i = 0; i < 5; i++) {
//   bContainer.style.transform = "translate(-100vw)";
//   // i % 5 * 100
// }

let bBTN0 = document.getElementById("btn0");
let bBTN1 = document.getElementById("btn1");
let bBTN2 = document.getElementById("btn2");
let bBTN3 = document.getElementById("btn3");
let bBTN4 = document.getElementById("btn4");

// bBTN0.addEventListener("click", () => {
//   bContainer.style.transform = "translate(0vw)";
//   console.log("안녕0번");
// });

// bBTN1.addEventListener("click", () => {
//   bContainer.style.transform = "translate(-100vw)";
//   console.log("안녕1번");
// });

const arr = document.getElementsByClassName("num_btn");
for (let i = 0; i <= 4; i++) {
  arr[i].addEventListener("click", () => {
    bContainer.style.transform = `translate(-${(i % 5) * 100}vw)`;
  });
}
