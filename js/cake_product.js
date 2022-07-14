let data = null;
let filter = [];
let checkbox = Array.from(document.getElementsByClassName("cake_box"));

axios.get("http://twosome-api.seoly.me/api/product").then((res) => {
  data = res.data;

  let cake_wrap = document.getElementById("cake_item_wrap");
  let cake = data.filter((x) => x.main_menu == "cake");
  draw(cake_wrap, cake);
});

checkbox.forEach((box) => {
  box.addEventListener("change", () => {
    if (box.checked) {
      filter.push(box.id);
    } else if (box.checked == false) {
      filter = filter.filter((x) => x != box.id);
    }

    if (data) {
      let cake_wrap = document.getElementById("cake_item_wrap");
      let cake = data.filter((x) => x.main_menu == "cake");
      draw(cake_wrap, cake);
    } else {
      console.log("오류입니다.");
    }
  });
});

// 1. 사용자가 검색어를 입력하고 버튼을 누른다.
// 2. 버튼의 이벤트핸들러가 실행된다.
// 3. 서버에 요청을 보낸다.
// 4. 서버가 데이터를 보내준다.
// 5. 서버가 보낸 데이터로 화면을 출력한다.

function search_item(event) {
  console.log(event);
  if (event.type == "keydown") {
    if (event.code != "Enter") {
      return;
    }
  }

  filter = [];
  checkbox.checked = false;

  let search_Value = document.getElementsByClassName("search_text")[0].value;

  axios
    .get("http://twosome-api.seoly.me/api/product", {
      params: {
        search: search_Value,
      },
    })
    .then((res) => {
      data = res.data;

      let cake_wrap = document.getElementById("cake_item_wrap");
      let cake = data.filter((x) => x.main_menu == "cake");
      draw(cake_wrap, cake);
    });
}

let input = document.getElementsByClassName("search_text")[0];
let btn = document.getElementsByClassName("search_button")[0];
input.addEventListener("keydown", search_item);
btn.addEventListener("click", search_item);

function draw(target, data) {
  if (filter.length != 0) {
    data = data.filter((product) => filter.includes(product.sub_menu));
  }

  const print_page = target.cloneNode();
  const parent = target.parentNode;
  parent.appendChild(print_page);
  target.remove();

  let cake_wrap = document.getElementById("cake_item_wrap");
  data.forEach((x) => {
    let inner = document.createElement("div");
    let img = document.createElement("img");
    let name = document.createElement("p");
    let layer = document.createElement("div");
    let layer_inner = document.createElement("div");
    let layer_name = document.createElement("h2");
    let layer_line = document.createElement("hr");
    let layer_text = document.createElement("p");

    inner.className = "inner";
    img.setAttribute("src", x.img);
    name.innerText = x.name;
    layer.className = "layer";
    layer_inner.className = "layer_inner";
    layer_name.innerText = x.name;
    layer_text.innerText = x.text;

    inner.appendChild(img);
    inner.appendChild(name);
    cake_wrap.appendChild(inner);
    inner.appendChild(layer);
    layer.appendChild(layer_inner);
    layer_inner.appendChild(layer_name);
    layer_inner.appendChild(layer_line);
    layer_inner.appendChild(layer_text);

    inner.addEventListener("click", () => {
      if (layer.style.opacity == 0) {
        layer.style.opacity = 1;
        layer_inner.style.opacity = 1;
      } else if (layer.style.opacity == 1) {
        layer.style.opacity = 0;
        layer_inner.style.opacity = 0;
      }
    });
  });
}
