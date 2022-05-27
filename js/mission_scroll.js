window.addEventListener("scroll", () => {
  let mission = document.getElementById("mission");
  let missionT = window.pageYOffset + mission.getBoundingClientRect().top;
  let scrT = window.pageYOffset;
  let m_img = document.getElementsByClassName("mission_img");
  if (scrT >= missionT - 500) {
    for (i = 0; i < m_img.length; i++) {
      m_img[i].classList.add("ani");
    }
  } else {
    for (i = 0; i < m_img.length; i++) {
      m_img[i].classList.remove("ani");
    }
  }
});

// 제이쿼리
// // 스크롤 시 실행
// $(window).scroll(function () {
//   // id:mission의 y축 절대좌표를 offset으로 선언
//   var offset = $("#mission").offset().top;
//   // 내가 있는 스크롤의 y축 좌표를 scrT로 선언
//   var scrT = $(window).scrollTop();
//   if (scrT >= offset - 500) {
//     $(".mission_img").addClass("ani");
//   } else {
//     $(".mission_img").removeClass("ani");
//   }
// });
