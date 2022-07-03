let data = null
let filter = []
let checkbox = Array.from(document.getElementsByClassName("bev_box"))
checkbox.forEach((box) => {
	box.addEventListener('change', () => {
		if (checkbox[0].checked && filter.includes("coffee") == false) {
			filter.push("coffee")
		} else if(checkbox[0].checked == false) {
			filter = filter.filter(x => x !== "coffee")
		}
		if (checkbox[1].checked && filter.includes("tea") == false) {
			filter.push("tea")
		} else if(checkbox[1].checked == false) {
			filter = filter.filter(x => x !== "tea")
		}
		if (checkbox[2].checked && filter.includes("tea_variation") == false) {
			filter.push("tea_variation")
		} else if(checkbox[2].checked == false) {
			filter = filter.filter(x => x !== "tea_variation")
		}
		if (checkbox[3].checked && filter.includes("newtro_taste") == false) {
			filter.push("newtro_taste")
		} else if(checkbox[3].checked == false) {
			filter = filter.filter(x => x !== "newtro_taste")
		}
		if (checkbox[4].checked && filter.includes("blended_fruit") == false) {
			filter.push("blended_fruit")
		} else if(checkbox[4].checked == false) {
			filter = filter.filter(x => x !== "blended_fruit")
		}
		if (checkbox[5].checked && filter.includes("ade_fruittea") == false) {
			filter.push("ade_fruittea")
		} else if(checkbox[5].checked == false) {
			filter = filter.filter(x => x !== "ade_fruittea")
		}
		if (checkbox[6].checked && filter.includes("ice_blended") == false) {
			filter.push("ice_blended")
		} else if(checkbox[6].checked == false) {
			filter = filter.filter(x => x !== "ice_blended")
		}		
		if (checkbox[7].checked && filter.includes("other") == false) {
			filter.push("other")
		} else if(checkbox[7].checked == false) {
			filter = filter.filter(x => x !== "other")
		}
		console.log(filter)
	})	
})






function draw(target, data) {
	data.forEach((x) => {
		let inner = document.createElement("div")
		let img = document.createElement("img")
		let text = document.createElement("p")
		
		inner.className = "inner"
		img.setAttribute("src", x.img)
		text.innerText = x.name
		
		inner.appendChild(img)
		inner.appendChild(text)
		target.appendChild(inner)

	})
}

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