// 비동기 콜백에서 사용할 변수는 바깥에서 미리 변수를 초기화시킨다.
// 미리 null값으로 초기화시켜놓으면 if문으로 값을 체크해보고(72~76줄)오류를 피할수 있도록 코딩할 수 있다.
let data = null;

// product의 api를 가져와서 그 데이터를 deta로 할당하고
// checkbox(bev_box)가 체크되면, filter배열에 있는 서브메뉴를 가진 요소를 data(인자)에 포함
// 이전에 출력되었던 요소들을 삭제하고
// bev_wrap에 data에 있는 요소들을 출력

axios.get("http://twosome-api.seoly.me/api/product").then((res) => {
  data = res.data;

  const beverage = data.filter((x) => x.main_menu == "beverage");
  const bev_wrap = document.getElementById("beverage_item_wrap");

  // 데이터를 받아 화면에 그리기 위해 draw함수 실행
  draw(bev_wrap, beverage);
});

// checkbox(bev_box)를 체크하면 filter에 담기고, 체크 해재하면 filter에 빠짐.
// checkbox(bev_box)가 체크되면, filter배열에 있는 서브메뉴를 가진 요소를 data(인자)에 포함
// 이전에 출력되었던 요소들을 삭제하고
// bev_wrap에 data에 있는 요소들을 출력
let filter = []; // 출력할 서브메뉴를 담을 배열 선언
let checkbox = Array.from(document.getElementsByClassName("bev_box")); // 필터링될 서브메뉴의 체크박스들의 배열 선언
checkbox.forEach((box) => {
  box.addEventListener("change", () => {
    // 배열로 이루어진 여러개의 요소(.bev_box = checkbox)에 이벤트리스너 등록
    // 해당 체크박스가 체크되면 filter 배열에 들어가고 체크해제되면 filter 배열에 빠짐
    if (checkbox[0].checked && filter.includes("coffee") == false) {
      filter.push("coffee");
    } else if (checkbox[0].checked == false) {
      filter = filter.filter((x) => x !== "coffee");
    }
    if (checkbox[1].checked && filter.includes("tea") == false) {
      filter.push("tea");
    } else if (checkbox[1].checked == false) {
      filter = filter.filter((x) => x !== "tea");
    }
    if (checkbox[2].checked && filter.includes("tea_variation") == false) {
      filter.push("tea_variation");
    } else if (checkbox[2].checked == false) {
      filter = filter.filter((x) => x !== "tea_variation");
    }
    if (checkbox[3].checked && filter.includes("newtro_taste") == false) {
      filter.push("newtro_taste");
    } else if (checkbox[3].checked == false) {
      filter = filter.filter((x) => x !== "newtro_taste");
    }
    if (checkbox[4].checked && filter.includes("blended_fruit") == false) {
      filter.push("blended_fruit");
    } else if (checkbox[4].checked == false) {
      filter = filter.filter((x) => x !== "blended_fruit");
    }
    if (checkbox[5].checked && filter.includes("ade_fruittea") == false) {
      filter.push("ade_fruittea");
    } else if (checkbox[5].checked == false) {
      filter = filter.filter((x) => x !== "ade_fruittea");
    }
    if (checkbox[6].checked && filter.includes("ice_blended") == false) {
      filter.push("ice_blended");
    } else if (checkbox[6].checked == false) {
      filter = filter.filter((x) => x !== "ice_blended");
    }
    if (checkbox[7].checked && filter.includes("other") == false) {
      filter.push("other");
    } else if (checkbox[7].checked == false) {
      filter = filter.filter((x) => x !== "other");
    }
    console.log(filter);

    // 체크박스에 반응하여 화면에 그리기 위해 draw 실행
    // if문을 사용한 이유는 미리 null값으로 초기화시켜놓은 data를 if문으로 값을 체크해보고(값이 있는지(true) 없는지(false(null))) 오류를 피할수 있도록 코딩할 수 있다.
    const bev_wrap = document.getElementById("beverage_item_wrap");
    if (data) {
      const beverage = data.filter((x) => x.main_menu == "beverage");
      draw(bev_wrap, beverage);
    } else {
      alert("오류: 데이터가 늦네요!");
    }
  });
});

// checkbox(bev_box)가 체크되면, filter배열에 있는 서브메뉴를 가진 요소를 data(인자)에 포함
// 이전에 출력되었던 요소들을 삭제하고
// bev_wrap에 data에 있는 요소들을 출력
function draw(target, data) {
  // isAll() : 체크박스가 체크되어있을 때 아래 서술한 것 실행
  if (isAll()) {
    // filter배열의 요소에 data(인자)배열의 요소의 서브메뉴가 포함된다면
    // 해당 서브메뉴를 가진 data(인자)배열의 요소를 data(인자)배열에 할당한다.
    data = data.filter((product) => filter.includes(product.sub_menu));
  }

  // target(인자)를 복제하여 놓고 원본 target(인자)를 삭제
  const print_page = target.cloneNode(); // target(인자)을 복제한 것을 print_page에 할당
  const parent = target.parentNode; // target(인자)의 부모노드를 parent에 할당
  parent.appendChild(print_page); //parent(target의 부모)에 print_page(target이 복제된 것)에 자식으로 추가
  target.remove(); // target(인자) 제거. (이미 인자는 복제되어 parent의 자식 bev_wrap으로 있으므로.)

  // _data(인자)를 순회하여 bev_wrap에 inner와 자식들을 출력
  data.forEach((x) => {
    let inner = document.createElement("div");
    let img = document.createElement("img");
    let text = document.createElement("p");
    let layer = document.createElement("div");
    let layer_inner = document.createElement("div");
    let layer_name = document.createElement("h2");
    let layer_explain = document.createElement("p");
    let layer_line = document.createElement("hr");

    inner.className = "inner";
    img.setAttribute("src", x.img);
    text.innerText = x.name;
    layer.className = "layer";
    layer_inner.className = "layer_inner";
    layer_name.innerText = x.name;
    layer_explain.innerText = x.text;

    inner.appendChild(img);
    inner.appendChild(text);
    inner.appendChild(layer);
    layer.appendChild(layer_inner);
    layer_inner.appendChild(layer_name);
    layer_inner.appendChild(layer_line);
    layer_inner.appendChild(layer_explain);
    print_page.appendChild(inner);

    // layer의 opacity가 0일 때 레이어 생성, layer의 opacity가 1일때 레이어 제거
    function showLayer() {
      if (layer.style.opacity == 0) {
        layer.style.opacity = 1;
        layer_inner.style.opacity = 1;
      } else if (layer.style.opacity == 1) {
        layer.style.opacity = 0;
        layer_inner.style.opacity = 0;
      }
    }
    // inner를 클릭하면 showExplain함수 실행
    inner.addEventListener("click", showLayer);
  });
}

// checkbox(bev_box)가 체크되었을 떄 true, 체크되지 않았을 때 false를 반환하는 함수
function isAll() {
  let checkbox = Array.from(document.getElementsByClassName("bev_box"));

  let result = false;
  checkbox.forEach((x) => {
    // checkbox가 체크되어있을 떄 result는 true를 반환, checkbox가 체크가 안 되어있을 땐 result는 false를 반환
    result = result || x.checked;
  });

  return result;
}
