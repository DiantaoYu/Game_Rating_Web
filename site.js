hover = document.querySelectorAll("#hover")

for(var i = 0; i < hover.length; i++){
	hover[i].addEventListener("mouseover", function(){
		this.classList.add("hover")
	})

	hover[i].addEventListener("mouseout", function(){
		this.classList.remove("hover")
	})
}
