let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let element = document.createElement("div");
	console.log(element);
	element.style.background = "yellow";
	element.innerHTML = "Hello World";
	document.body.appendChild(element);
});