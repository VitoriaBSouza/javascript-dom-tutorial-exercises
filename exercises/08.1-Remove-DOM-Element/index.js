// If you check the HTML, you will find that the second <li> has the id=secondElement
// You can use that to your advantage like a CSS selector

// Your code here

let parent = document.querySelector("ul");
let child = document.querySelector("#secondElement");
parent.removeChild(child);