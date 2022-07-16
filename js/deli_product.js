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

    inner.className = "inner";
    img.setAttribute("src", x.img);
    text.innerText = x.name;

    inner.appendChild(img);
    inner.appendChild(text);
    twinNode.appendChild(inner);
  });
}
