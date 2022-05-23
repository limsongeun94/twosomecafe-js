function setModal(id) {
  // 최상위스크롤인 body태그의 스크롤을 비활성화
  document.body.style.overflowY = "hidden";
  // 인자로 전달받은 id로 modal을 찾아서 디스플레이값을 설정
  const modal = document.getElementById(id);
  modal.style.display = "flex";

  // 문자열은 따옴표로 꼭 감싸줘야해
  // content.style.display = block;
  // console.log(안녕);
}

function closeModal(id) {
  // 비활성화되었던 body태그의 스크롤을 활성화
  document.body.style.overflowY = "unset";
  // 인자로 전달받은 id로 modal을 찾아서 디스플레이값을 설정
  const modal = document.getElementById(id);
  modal.style.display = "none";
}
