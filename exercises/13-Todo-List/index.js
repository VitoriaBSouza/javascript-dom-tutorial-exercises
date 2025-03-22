// Your code here
const addTask = document.getElementById("addToDo");

addTask.addEventListener("keydown", function(e){

    if (addTask.value.trim() !== "" && e.key === "Enter") {
        let newTask = document.createElement("li");
        newTask.innerHTML = '<span><i class="fa fa-trash"></i></span>' + addTask.value;
        document.querySelector("ul").appendChild(newTask);
        addTask.value = "";
    }
   
})

const list = document.querySelector("ul");
list.addEventListener("click", function(event) {
    if (event.target.matches(".fa-trash")) {
      event.target.parentElement.parentElement.remove();
    }
});
