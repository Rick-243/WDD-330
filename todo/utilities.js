// second list for active todos
const activeTodoItems = document.querySelector('.todo-items');

function checkTodos(){
    let num = localStorage.getItem("todos");
    let todos;
    if(num == null){
        todos = [];
    } else {
        todos = JSON.parse(num);
    }
    let total = document.querySelector('.pending');
    total.textContent = todos.length;
}


function showTasks(){
    let number = localStorage.getItem("todos");
    let arr;
    if(number == null){
        arr = [];
    } else {
        arr = JSON.parse(number);
    }
    let total = document.querySelector('.pending');
    total.textContent = arr.length;

    let checked = document.querySelector(".todo-items");
    
    checked.addEventListener('click', function(event){
        if(event.target.type === 'checkbox'){
            let count = Object.keys(arr).length;
            count--;
            total.textContent = count;
        } 
    }); 
}

export {
    checkTodos,
    showTasks
}