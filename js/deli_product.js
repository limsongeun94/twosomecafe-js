let data = null;
let deli_wrap = document.getElementById("deli_item_wrap");
let filter = [];

axios
  .get("http://twosome-api.seoly.me/api/product", {
    params: {
      main_filter: "deli",
    },
  })
  .then((res) => {
    data = res.data;
    let deli_wrap = document.getElementById("deli_item_wrap");
    draw(deli_wrap, data);
  });

let checkbox = Array.from(document.getElementsByClassName("deli_box"));
checkbox.forEach((box) => {
  box.addEventListener("change", () => {
    if (box.checked) {
      filter.push(box.id);
    } else {
      filter = filter.filter((x) => x != box.id);
    }

    console.log(filter);
    if (data) {
      let deli_wrap = document.getElementById("deli_item_wrap");
      draw(deli_wrap, data);
    } else {
      console.log("데이터를 받아오지 못했습니다.");
    }
  });
});

function search_item(event) {
  if (event.type == "keydown") {
    if (event.code != "Enter") {
      return;
    }
  }

  filter = [];
  checkbox.checked = false;

  let search_value = document.getElementsByClassName("search_text")[0].value;

  axios
    .get("http://twosome-api.seoly.me/api/product", {
      params: {
        main_filter: "deli",
        search: search_value,
      },
    })
    .then((res) => {
      data = res.data;
      let deli_wrap = document.getElementById("deli_item_wrap");
      draw(deli_wrap, data);
    });
}
let input = document.getElementsByClassName("search_text")[0];
let btn = document.getElementsByClassName("search_button")[0];
input.addEventListener("keydown", search_item);
btn.addEventListener("click", search_item);

function draw(target, item) {
  if (filter.length != 0) {
    item = item.filter((product) => filter.includes(product.sub_menu));
  }
  let twinNode = target.cloneNode();
  let parentNode = target.parentNode;
  parentNode.appendChild(twinNode);
  target.remove();

  item.forEach((x) => {
    let inner = document.createElement("div");
    let img = document.createElement("img");
    let text = document.createElement("p");
    let layer = document.createElement("div");
    let layer_inner = document.createElement("div");
    let layer_name = document.createElement("h2");
    let layer_line = document.createElement("hr");
    let layer_explain = document.createElement("p");

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
    twinNode.appendChild(inner);

    inner.addEventListener("click", () => {
      if (layer.style.opacity == 0) {
        layer.style.opacity = 1;
        layer_inner.style.opacity = 1;
      } else if (layer.style.opacity == 1) {
        layer.style.opacity = 0;
        layer.style.opacity = 0;
      }
    });
  });
}
