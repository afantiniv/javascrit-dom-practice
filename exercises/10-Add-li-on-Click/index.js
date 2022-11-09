let button = document.querySelector("#superDuperButton");
let i = 1;
button.addEventListener("click", function() {
	//your code here
	let list = document.querySelector("#myList");
	let element = document.createElement("li");
	element.innerHTML = i;
	list.appendChild(element);
	i++;
});
