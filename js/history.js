const histArr = [
  { year: "2002", event: "투썸플레이스 1호점 신촌점 오픈" },
  { year: "2008", event: "프랜차이즈 사업 시작. 가맹 1호점 신사점 오픈." },
  { year: "2010", event: "100호점 오픈" },
  { year: "2012", event: "200호점 오픈" },
  { year: "2013", event: "300호점 오픈" },
  { year: "2014", event: "업계 최초 '원두 이원화 서비스' 실시. 500호점 오픈." },
  { year: "2015", event: "로스팅 플랜트 준공" },
  { year: "2016", event: "700호점 오픈. Drive-Thru 1호점 오픈" },
  { year: "2018", event: "1000호점 오픈" },
  {
    year: "2019",
    event: "원두 이원화 서비스 브랜드 리뉴얼 (블랙그라운드, 아로마노트)",
  },
  { year: "2020", event: "홈카페 대표브랜드 '에이리스트' 론칭" },
];

// 현재 스크롤 위치를 감시하면서 내가 원하는 지점에 도착하면 콜백함수 실행시키는...
window.addEventListener("wheel", wheelEventFunction(e));

function wheelEventFunction(e) {
  let section = document.getElementById("history");
  let sectionT = window.pageYOffset + section.getBoundingClientRect().top; //섹션좌표
  let scrT = window.pageYOffset; //내좌표

  if (scrT >= sectionT - 500) {
    document.getElementById("year_container").innerText = histArr[e++].year;
    document.getElementById("event_container").innerText = histArr[e++].event;
    console.log("안녕");
  }
}
