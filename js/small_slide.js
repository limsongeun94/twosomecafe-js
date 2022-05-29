let bestArr = [
  { img: "img/index/best_menu/alist_cold_brew_rtd.jpg", name: "에이리스트 콜드브루" },
  { img: "img/index/best_menu/americano.jpg", name: "아메리카노" },
  {
    img: "img/index/best_menu/basic_stainless_mug_gray.png",
    name: "베이직 스테인리스 머그 (그레이)",
  },
  { img: "img/index/best_menu/belt_sandwich.png", name: "BELT 샌드위치" },
  { img: "img/index/best_menu/black_ground.jpg", name: "블랙 그라운드" },
  {
    img: "img/index/best_menu/cranberry_chicken_sandwich.png",
    name: "크랜베리 치킨 샌드위치",
  },
  { img: "img/index/best_menu/dalgona_cafe_latte.png", name: "달고나 카페라떼" },
  { img: "img/index/best_menu/english_breakfast.jpg", name: "잉글리쉬 브렉퍼스트" },
  {
    img: "img/index/best_menu/one_touch_tumbler_aromawhite.jpg",
    name: "원터치 텀블러 (아로마화이트)",
  },
  { img: "img/index/best_menu/piece_ice_box.jpg", name: "떠먹는 아이스박스" },
  {
    img: "img/index/best_menu/piece_mont_blanc_marron_glace_cake.jpg",
    name: "몽블랑 보늬밤 조각케익",
  },
  { img: "img/index/best_menu/piece_tiramisu.jpg", name: "떠먹는 티라미수" },
];


let smallbtn0 = document.getElementById("best_btn0")
let smallbtn1 = document.getElementById("best_btn1")
let smallbtn2 = document.getElementById("best_btn2")
smallbtn0.addEventListener("click", () => smallBtnCreateBestArr(0))
smallbtn1.addEventListener("click", () => smallBtnCreateBestArr(1))
smallbtn2.addEventListener("click", () => smallBtnCreateBestArr(2))

function smallBtnCreateBestArr(x) {
  smallbtn0.innerText = "○";
  smallbtn1.innerText = "○";
  smallbtn2.innerText = "○";
  switch (x) {
    case 0:
      leftCursor = 0
      rightCursor = 4
      // renderArr(bestArr.slice(0, 4));
      smallbtn0.innerText = "●";
      break;
    case 1:
      leftCursor = 4
      rightCursor = 8
      // renderArr(bestArr.slice(4, 8));
      smallbtn1.innerText = "●";
      break;
    case 2:
      leftCursor = 8
      rightCursor = 12
      // renderArr(bestArr.slice(-4));
      smallbtn2.innerText = "●";
      break;
    default: console.log("hey~ its error~")
  }
  renderArr(bestArr.slice(leftCursor, rightCursor))
}


function renderArr(arr) {
  let container = document.getElementById("best_menu_wrap")
  
  Array.from(container.children).forEach((x, i) => {
    let img = Array.from(x.getElementsByTagName("img"))[0]
    let text = Array.from(x.getElementsByTagName("p"))[0]

    img.setAttribute("src", arr[i].img)
    text.innerText = arr[i].name
  })

  // for (i = 0; i < arr.length; i++){
  //   let item = document.createElement("div")
  //   let img = document.createElement("img")
  //   let text = document.createElement("p")

  //   item.classList.add("best_item_container")
  //   img.classList.add("best_item_img")
  //   img.setAttribute("src", arr[i].img)
  //   text.classList.add("best_item_text")
  //   text.innerText = arr[i].name

  //   item.appendChild(img)
  //   item.appendChild(text)
  //   container.appendChild(item)
  // }
}

const btnLt = document.getElementById("bestLt")
const btnRt = document.getElementById("bestRt")

let leftCursor = 0
let rightCursor = 4

btnLt.addEventListener("click", () => {
  leftCursor -= 4
  leftCursor = leftCursor < 0 ? leftCursor + bestArr.length : leftCursor
  rightCursor -= 4
  rightCursor = rightCursor < 1 ? rightCursor + bestArr.length : rightCursor

  console.log(leftCursor, rightCursor)

  renderArr(bestArr.slice(leftCursor, rightCursor))
  smallBtnCreateBestArr(leftCursor / 4)
})
btnRt.addEventListener("click", () => {
  leftCursor += 4
  leftCursor = leftCursor % bestArr.length
  rightCursor += 4 
  rightCursor = rightCursor > bestArr.length ? rightCursor - bestArr.length : rightCursor

  renderArr(bestArr.slice(leftCursor, rightCursor))
  smallBtnCreateBestArr(leftCursor / 4)
})

// btnLt.addEventListener("click", () => newCreateBestArr(-1))
// btnRt.addEventListener("click", () => newCreateBestArr(1))

// function newCreateBestArr(x) {
//   if (x < 0) {
//     bestArr = bestArr.slice(-4).concat(bestArr.slice(0,-4))
//   } else if (x > 0) {
//     bestArr = bestArr.slice(4).concat(bestArr.slice(0,4))
//   } else { }  
  
//   renderArr(bestArr.slice(0, 4))
// }

renderArr(bestArr.slice(leftCursor, rightCursor))

