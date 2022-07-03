axios
	.get("http://twosome-api.seoly.me")
	.then(res => {
		const data = res.data

		const ice = data.filter(x => x.main_menu == "ice_cream")

		const bev_wrap = document.getElementById("ice_item_wrap")
		ice.map((x) => {
			let inner = document.createElement("div")
			let img = document.createElement("img")
			let text = document.createElement("p")
			
			inner.className = "inner"
			img.setAttribute("src", x.img)
			text.innerText = x.name
			
			inner.appendChild(img)
			inner.appendChild(text)
			bev_wrap.appendChild(inner)
		})
		
        
	})
function showclick() {
console.log("클릭")
}

function showchange() {
console.log("체인지")
}