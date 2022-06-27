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

//----------------------------------------버튼작동----------------------------------------
//////////동그라미버튼//////////
// 변수 current 선언
let current = 0;
// 동그라미 버튼 배열을 arr로 선언
const arr = document.getElementsByClassName("num_btn");
for (let i = 0; i <= 4; i++) {
  // 동그라미 버튼0-4를 누를 때마다
  arr[i].addEventListener("click", () => {
    // (버튼을 누를때마다) current 값을 변경해주고
    current = i;
    // bContainer가 current값에 따라 이동하는 함수인 setPosition 실행
    setPosition();
    fillCircle();
  });
}
//////////동그라미버튼//////////

//////////이전다음버튼//////////
const l_btn = document.getElementById("btn_left");
const r_btn = document.getElementById("btn_right");
l_btn.addEventListener("click", () => {
  // 이전버튼을 클릭할 때마다 current 값 감소
  current--;
  // 나머지(모듈러)는 음수일 때 작동 안 하므로, current가 음수일 때 조건식 작성
  if (current < 0) current += bannerArr.length;
  // bContainer가 current값에 따라 이동하는 함수인 setPosition 실행
  setPosition();
  fillCircle();
});
r_btn.addEventListener("click", () => {
  // 다음버튼 클릭할 때마다 current 값 감소.
  current++;
  // bContainer가 current값에 따라 이동하는 함수인 setPosition 실행
  setPosition();
  fillCircle();
});
//////////이전다음버튼//////////

function fillCircle() {
  const expr = bInner.id;
  switch (expr) {
    case "banner_inner_0":
      arr[0].innerText = "●";
      console.log("안녕0");
      break;
    case "banner_inner_1":
      arr[1].innerText = "●";
      console.log("안녕1");
      break;
    case "banner_inner_2":
      arr[2].innerText = "●";
      console.log("안녕2");
      break;
    case "banner_inner_3":
      arr[3].innerText = "●";
      console.log("안녕3");
      break;
    case "banner_inner_4":
      arr[4].innerText = "●";
      console.log("안녕4");
      break;
    default:
      console.log("디폴트");
  }
}

// current값을 활용해서 위치를 설정하는 함수를 만들어서 매번 실행해주면 좋을거같아
function setPosition() {
  bContainer.style.transform = `translate(-${(current % 5) * 100}vw)`;
}
//----------------------------------------버튼작동----------------------------------------
