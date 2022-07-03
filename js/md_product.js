axios
	.get("http://twosome-api.seoly.me")
	.then(res => {
		const data = res.data

		const md = data.filter(x => x.main_menu == "md")

		const md_wrap = document.getElementById("md_item_wrap")
		md.map((x) => {
			let inner = document.createElement("div")
			let img = document.createElement("img")
			let text = document.createElement("p")
			
			inner.className = "inner"
			img.setAttribute("src", x.img)
			text.innerText = x.name
			
			inner.appendChild(img)
			inner.appendChild(text)
			md_wrap.appendChild(inner)
		})
		
        
	})
function showclick() {
console.log("클릭")
}

function showchange() {
console.log("체인지")
}