let data = null;
let filter = [];

axios
  .get("http://twosome-api.seoly.me/api/product", {
    params: {
      main_filter: "bread",
    },
  })
  .then((res) => {
    let data = res.data;
    let bev_wrap = document.getElementById("bread_item_wrap");
    draw(bev_wrap, data);
  });

let checkboxList = Array.from(
  document.getElementsByClassName("bread_checkbox")
);

checkboxList.forEach((submenuCheckbox) => {
  submenuCheckbox.addEventListener("change", () => {
    if (submenuCheckbox.checked) {
      filter.push(submenuCheckbox.id);
      axios
        .get("http://twosome-api.seoly.me/api/product", {
          params: {
            main_filter: "bread",
            sub_filter: filter.join(","),
          },
        })
        .then((res) => {
          let data = res.data;
          let bev_wrap = document.getElementById("bread_item_wrap");
          draw(bev_wrap, data);
        });
    } else {
      filter = filter.filter((x) => x != submenuCheckbox.id);
      axios
        .get("http://twosome-api.seoly.me/api/product", {
          params: {
            main_filter: "bread",
            sub_filter: filter.join(","),
          },
        })
        .then((res) => {
          let data = res.data;
          let bev_wrap = document.getElementById("bread_item_wrap");
          draw(bev_wrap, data);
        });
    }
  });
});

function draw(target, item) {
  let newTarget = target.cloneNode();
  let parentNode = target.parentNode;
  parentNode.appendChild(newTarget);
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
    newTarget.appendChild(inner);

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
