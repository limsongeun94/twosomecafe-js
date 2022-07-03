let data = null
const filter = []

// function draw(target, data) {
// 	data.forEach((x) => {
// 		let inner = document.createElement("div")
// 		let img = document.createElement("img")
// 		let text = document.createElement("p")
		
// 		inner.className = "inner"
// 		img.setAttribute("src", x.img)
// 		text.innerText = x.name
		
// 		inner.appendChild(img)
// 		inner.appendChild(text)
// 		target.appendChild(inner)

// 	})
// }

// function isAll() {

// 	let checkbox = Array.from(document.getElementsByClassName("bev_box"))

// 	let result = false;
// 	checkbox.forEach(x => {
// 		result = result || x.checked
// 	})

// 	return result;
// }

axios
	.get("http://twosome-api.seoly.me")
	.then(res => {
		data = res.data

		const beverage = data.filter(x => x.main_menu == "beverage")
		const bev_wrap = document.getElementById("beverage_item_wrap")

		
		draw(bev_wrap, beverage)
        
	})



function showcoffee() {
	// coffee_box = document.getElementById("coffee")
	// if (coffee_box.checked == true) {
	// 	const coffee = data.filter(x => x.main_menu == "beverage" && x.sub_menu == "coffee")

	// 	const bev_wrap = document.getElementById("beverage_item_wrap")
	// 	const new_bev_wrap = bev_wrap.cloneNode()
	// 	const parent = bev_wrap.parentNode
	// 	parent.appendChild(new_bev_wrap)
	// 	bev_wrap.remove()


	// 	draw(new_bev_wrap, coffee)
	// }

	// else {

	// }
}