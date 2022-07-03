axios
	.get("http://twosome-api.seoly.me")
	.then(res => {
		const data = res.data

		const bread = data.filter(x => x.main_menu == "bread")

		const bev_wrap = document.getElementById("bread_item_wrap")
		bread.map((x) => {
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