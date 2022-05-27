// 네브바
// 네브바
// 네브바
const nav = Array.from(document.getElementsByTagName("nav"))[0];
const hide = document.getElementById("hide_menu_wrap");

nav.addEventListener("mouseenter", (e) => {
  hide.style.display = "flex";
});

nav.addEventListener("mouseleave", (e) => {
  hide.style.display = "none";
});
// 네브바
// 네브바
// 네브바

// 모달
// 모달
// 모달
function setModal(id) {
  // 인자로 전달받은 id로 modal을 찾아서 디스플레이값을 설정
  let selectModal = document.getElementById(id);
  selectModal.style.display = "flex";
}

function closeModal(id) {
  // 인자로 전달받은 id로 modal을 찾아서 디스플레이값을 설정
  let setModal = document.getElementById(id);
  setModal.style.display = "none";
}

class ModalData {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }

  insertContent(tid, cid) {
    let titleId = document.getElementById(tid);
    let contentId = document.getElementById(cid);
    titleId.innerHTML = this.title;
    contentId.innerHTML = this.content;
  }
}

let email = new ModalData(
  "이메일 무단수집거부",
  "<p>본 웹사이트에 게시된 이메일 주소가 전자우편수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며, 이를 위반시 정보통신망법에 의해 형사 처벌됨을 유념하시기 바랍니다.</p><br/><p>[게시일 2004년 9월 3일]</p>"
);
email.insertContent("email_modal_title", "email_modal_content");

let legal = new ModalData(
  "법적고지",
  "<p>고객 여러분의 투썸플레이스㈜ 사이트 방문에 감사 드립니다. 이 사이트를 통해 관련된 다양한 정보를 제공할 수 있게 됨을 매우 기쁘게 생각하며 이 사이트 및 기타 관련 사이트들에 대해 방문자 여러분께 몇가지 법적 제한과 금지사항을 알려 드리고자 합니다.</p><br/><p>고객님께서는 정보를 개인적인 용도로 사용하시거나 고객의 컴퓨터에 저장하실 수 있습니다. 고객님의 개인적인 홈페이지나 문서로부터 본 서버로의 링크 등은 가능합니다. 그러나 본 사이트는 투썸플레이스㈜의 독점적 소유의 정보자산입니다.</p><br/><p>투썸플레이스㈜은 이 사이트를 개발하기 위하여 자금, 시간 및 노력을 투입하였습니다. 이러한 자산들은 저작권, 상표권, 기술에 대한 정보에만 국한되지 않습니다. 투썸플레이스㈜에 소유권이 있는 정보자산들은 문자, 그림, 음성, 화성, 내려 받기 파일, 링크 및 소스코드들 (이하 서비스와자료들)의 형태로 제공됩니다. 투썸플레이스㈜은 이러한 서비스와 자료들에 대한 모든 권리를 소유합니다. 이러한 서비스와 자료들은 오직 투썸플레이스㈜의 고객들과 고객들의 편의를 위해서 제공되었습니다. 투썸플레이스㈜은 본사이트에서 고객들에게 제공되는 서비스와 자료들에 대하여 고객들에게 지적인 재산권을 부여한 것은 아닙니다.</p><br/><p>투썸플레이스㈜은 이 사이트 및 다른 관련 사이트들의 서비스와 자료들 및 기타 정보들에 대한 정확도, 완성도, 신뢰도에 대하여 보장하지 않습니다. 따라서 투썸플레이스㈜은 문서로 특별히 조언을 드리는 경우를 제외하고는 이 사이트에 포함된 정보를 이익에 관련된 결정상의 참고자료로 의존하지 마시기 바랍니다.</p><br/><p>그리고 투썸플레이스㈜은 서버나 자료들에 대한 판매 목적상의 무제한 보증이나 특별한 목적 하의 맞춰진 적합성을 포함하여 표현되거나 함축된 어떤 또는 모든 보증을 부인합니다. 서비스와 자료들에 관련된 어떤 종류의 직접적, 간접적, 우발적, 징벌적 또는 필연적인 피해에 관련된 경우에 대하여 투썸플레이스㈜에서는 책임을 지지 않습니다.</p>"
);
legal.insertContent("legal_modal_title", "legal_modal_content");
// 모달
// 모달
// 모달
