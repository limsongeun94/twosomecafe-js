let data = null;

axios
  .get("http://twosome-api.seoly.me/api/product", {
    params: {
      main_filter: "md",
    },
  })
  .then((res) => {
    const data = res.data;
    const md_wrap = document.getElementById("md_item_wrap");
    draw(md_wrap, data);
  });

let filter = [];
let checkboxList = Array.from(document.getElementsByClassName("md_checkbox"));
checkboxList.forEach((box) => {
  box.addEventListener("change", () => {
    if (box.checked) {
      filter.push(box.id);

      axios
        .get("http://twosome-api.seoly.me/api/product", {
          params: {
            main_filter: "md",
            sub_filter: filter.join(","),
          },
        })
        .then((res) => {
          const data = res.data;
          const md_wrap = document.getElementById("md_item_wrap");
          draw(md_wrap, data);
        });
    } else {
      filter = filter.filter((x) => x != box.id);

      axios
        .get("http://twosome-api.seoly.me/api/product", {
          params: {
            main_filter: "md",
            sub_filter: filter.join(","),
          },
        })
        .then((res) => {
          const data = res.data;
          const md_wrap = document.getElementById("md_item_wrap");
          draw(md_wrap, data);
        });
    }
  });
});

function draw(target, item) {
  let newNode = target.cloneNode();
  let parentNode = target.parentNode;
  parentNode.appendChild(newNode);
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
    newNode.appendChild(inner);

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
