let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let newLi = document.createElement("li");
	newLi.innerHTML = "Fourth element";
	document.querySelector("#myList").appendChild(newLi);
});
