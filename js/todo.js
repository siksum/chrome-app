const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// document.querySelelctor("#todo-form input")과 동일
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    console.log(newTodo, toDoInput.value)
}

toDoForm.addEventListener("submit", handleToDoSubmit);