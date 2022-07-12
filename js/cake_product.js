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
    if (box.checked && filter.includes(box.id) == false) {
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
    console.log(filter);
  });
});

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
