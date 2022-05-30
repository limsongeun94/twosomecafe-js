appArr = [
  {
    img: "../../img/app_membership/img_mockup_01@3x.png",
    title: "① 투썸오더",
    guide:
      "투썸하트 앱을 통해 간편하게 주문하여 매장 방문 시 기다림 없이<br />쉽고 빠르게 주문한 메뉴를 수령할 수 있는 모바일 주문 서비스입니다.",
  },
  {
    img: "../../img/app_membership/img_mockup_02@3x.png",
    title: "② 홀케이크 예약",
    guide:
      "투썸플레이스의 다양한 홀케이크를 원하는 날짜 및 시간으로 픽업 예약할 수 있으며,<br />케이크 토퍼 등 어울리는 다양한 부가 상품을 함께 구매할 수 있습니다.",
  },
  {
    img: "../../img/app_membership/img_mockup_03@3x.png",
    title: "③ 멤버십",
    guide:
      "하트는 투썸하트 앱 회원이 제품 구매 시 적립되는 단위로,<br />하트 적립에 따라 등급 산정 및 혜택 제공이 이루어집니다.",
  },
  {
    img: "../../img/app_membership/img_mockup_04@3x.png",
    title: "④ 스탬프",
    guide:
      "특정 기간 동안 이벤트 상품구매 시 적립되는 스탬프에 따라 쿠폰 등 다양한 혜택이<br />지급되며, 친구에게 선물할 수 있습니다.",
  },
  {
    img: "../../img/app_membership/img_mockup_05@3x.png",
    title: "⑤ 기프트카드",
    guide:
      "투썸플레이스 전 매장에서 현금처럼 사용이 가능한 충전식 선불카드입니다.<br />원하는 이미지, 특별한 이름으로 나만의 카드를 등록해보세요.",
  },
  {
    img: "../../img/app_membership/img_mockup_06@3x.png",
    title: "⑥ 선물하기",
    guide:
      "금액권, 교환권 등 다양한 선물을 구매할 수 있고, 친구에게 가지고 싶은 선물을<br /> 조를 수도 있습니다. 투썸의 달콤함을 선물해 보세요.",
  },
];

function renderArr(arr) {
  let img_container = document.getElementById("mockup_img_wrap");
  Array.from(img_container.children).forEach((x, i) => {
    x.setAttribute("src", arr[i].img);
  });

  let title_container = document.getElementById("app_guid_title");
  let explain_container = document.getElementById("app_guid_explain");

  title_container.innerText = arr[1].title;
  explain_container.innerHTML = arr[1].guide;
}

const leftBtn = document.getElementById("btnLt");
const rightBtn = document.getElementById("btnRt");

leftBtn.addEventListener("click", () => extractFromArray(-1));
rightBtn.addEventListener("click", () => extractFromArray(1));

function moveAppGuide(x) {
  if (x < 1) {
    appArr = appArr.slice(-1).concat(appArr.slice(0, 5));
  } else if (x > 1) {
    appArr = appArr.slice(1).concat(appArr(0, 1));
  }
  renderArr(appArr);
}
