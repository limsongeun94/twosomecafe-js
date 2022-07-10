// 비동기 콜백에서 사용할 변수는 바깥에서 미리 변수를 초기화시킨다.
// 미리 null값으로 초기화시켜놓으면 if문으로 값을 체크해보고(72~76줄)오류를 피할수 있도록 코딩할 수 있다.
let data = null;

// 체크박스 체크여부로 발생, 삭제될 서브메뉴를 담을 빈 배열 선언
let filter = [];

// 필터링될 서브메뉴의 체크박스들의 배열 선언
let checkbox = Array.from(document.getElementsByClassName("bev_box"));

// product의 api를 가져와서 그 받아온 데이터를 할당하고 화면에 그림
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

// 1. 사용자가 검색어를 입력하고 버튼을 누른다.
// 2. 버튼의 이벤트핸들러가 실행된다.
// 3. 서버에 요청을 보낸다.
// 4. 서버가 데이터를 보내준다.
// 5. 서버가 보낸 데이터로 화면을 출력한다.

function search_handler(e) {
  // keydown할 때마다 함수가 실행되지 않도록, keydown의 엔터키가 아니면 바로 종료시키도록 하는 함수.
  // 즉, 엔터키를 눌렀을 때 아래 동작들
  // (인풋창 값을 받아와서 api에 접근해서 필터링된 데이터를 받아와서 화면에 출력하려고 하는)
  // 을 실행한다.
  //이벤트 타입이 keydown인 경우에
  if (e.type == "keydown") {
    // 이벤트 코드가 엔터가 아닌 경우에, 함수를 종료한다.
    // return으로 출력을 해보내면 이후엔 실행할 이유가 없으니 함수가 종료되어버림.
    if (e.code != "Enter") return;
  }

  // 필터링 되었던 서브메뉴들을 싹 비워서 filter를 다시 빈 배열로 만든다.
  // !! 이전에 서브메뉴 b에 체크를 했었어도, 서브메뉴 a에 소속된 요소를 검색해도 결과가 나오는 기능 !!
  filter = [];

  // checkbox를 모두 체크 해제한다.
  // !! HTML에 보여지는 체크박스를 해제하는 기능. 서브메뉴 a에 소속된 요소가 결과값으로 나오는데 서브메뉴 b가 체크되는 불상사 막는 기능 !!
  checkbox.forEach((v) => {
    v.checked = false;
  });

  // 검색인풋의 값을 search_value로 할당한다.
  // (함수 내에서 선언된 변수이므로) 후술할 search_btn을 누를 때마다 value값이 할당됨
  // (함수 내에서 선언된 변수이므로) 버튼을 누를때마다 searhc_value값이 사용자가 입력한 문자열로 초기화됨
  let search_value = document.getElementsByClassName("search_text")[0].value;
  axios
    .get("http://twosome-api.seoly.me/api/product", {
      params: {
        search: search_value,
      },
    })
    .then((res) => {
      data = res.data;

      const beverage = data.filter((x) => x.main_menu == "beverage");
      const bev_wrap = document.getElementById("beverage_item_wrap");

      // 데이터를 받아 화면에 그리기 위해 draw함수 실행
      draw(bev_wrap, beverage);
    });
}

const search_btn = document.getElementsByClassName("search_button")[0];
const search_input = document.getElementsByClassName("search_text")[0];
search_btn.addEventListener("click", search_handler);
search_input.addEventListener("keydown", search_handler);

// checkbox(bev_box)가 체크되면, filter배열에 있는 서브메뉴를 가진 요소를 data(인자)에 포함
// 이전에 출력되었던 요소들을 삭제하고
// bev_wrap에 data에 있는 요소들을 출력
function draw(target, data) {
  // isFiltering() : filter 배열에 원소가 있으면 후술한 것 실행
  if (isFiltering()) {
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

// filter배열에 원소가 있다
function isFiltering() {
  return filter.length != 0;
}
