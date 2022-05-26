const imgWrap = Array.from(
  document.getElementsByClassName("space_design_img_wrap")
)[0];
const explain = Array.from(
  document.getElementsByClassName("space_design_explain")
)[0];
const infoWrap = Array.from(
  document.getElementsByClassName("space_design_info")
)[0];

imgWrap.addEventListener("mouseenter", () => {
  explain.style.display = "none";
  infoWrap.style.display = "block";
});

imgWrap.addEventListener("mouseleave", () => {
  explain.style.display = "block";
  infoWrap.style.display = "none";
});

const Acontainer = Array.from(
  document.getElementsByClassName("space_design_img type_a_img")
)[0];
const Bcontainer = Array.from(
  document.getElementsByClassName("space_design_img type_b_img")
)[0];
const Ccontainer = Array.from(
  document.getElementsByClassName("space_design_img type_c_img")
)[0];
const Dcontainer = Array.from(
  document.getElementsByClassName("space_design_img type_d_img")
)[0];

const Ainfo = document.getElementById("type_a_info");
const Binfo = document.getElementById("type_b_info");
const Cinfo = document.getElementById("type_c_info");
const Dinfo = document.getElementById("type_d_info");

Acontainer.addEventListener("mouseenter", () => {
  Ainfo.style.display = "block";
  Binfo.style.display = "none";
  Cinfo.style.display = "none";
  Dinfo.style.display = "none";
});

Bcontainer.addEventListener("mouseenter", () => {
  Ainfo.style.display = "none";
  Binfo.style.display = "block";
  Cinfo.style.display = "none";
  Dinfo.style.display = "none";
});

Ccontainer.addEventListener("mouseenter", () => {
  Ainfo.style.display = "none";
  Binfo.style.display = "none";
  Cinfo.style.display = "block";
  Dinfo.style.display = "none";
});

Ccontainer.addEventListener("mouseenter", () => {
  Ainfo.style.display = "none";
  Binfo.style.display = "none";
  Cinfo.style.display = "none";
  Dinfo.style.display = "block";
});

// $(function () {
//   $(".tab_box").hide();
//   $("#detail").show();
//   $(".product_tab_title li").click(function () {
//     $(".product_tab_title li")
//       .removeClass("active")
//       .css({ "background-color": "unset", borderbottom: "1px solid #645959" }); // 다 active 빼고
//     $(this).addClass("active").css({ "background-color": "#ececee" }); // 클릭반응만 active 추가
//     $(".tab_box").hide(); // 밑으로 나열 방지
//     var activeTab = $(this).attr("rel"); // rel 속성은 a요소, link 요소, area 요소에 사용되며, 링크된 대상과의 관계를 지정합니다
//     $("#" + activeTab).show(); // 클릭한 대제목 li에 연결돼있는 rel 링크 대상인 하단구조의 id의 할당 보여줘
//   });
// });
