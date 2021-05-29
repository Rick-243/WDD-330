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
    let arrFilter = arr.filter((a)=>{if(!a.completed){return a}});
    let count = Object.keys(arrFilter).length;
    total.textContent = count;
}

function filterAll(){
    let number = localStorage.getItem("todos");
    let all;
    if(number == null){
        all = [];
    } else {
        all = JSON.parse(number);
    }
    let allFilter = all.filter((a)=>{if(a.completed || !a.completed){return a}});
    return allFilter;
}

function filterActive(){
    let number = localStorage.getItem("todos");
    let active;
    if(number == null){
        active = [];
    } else {
        active = JSON.parse(number);
    }
    let activeFilter = active.filter((a)=>{if(!a.completed){return a}});
    return activeFilter; 
}

function filterCompleted(){
    let number = localStorage.getItem("todos");
    let completed;
    if(number == null){
        completed = [];
    } else {
        completed = JSON.parse(number);
    }
    let compFilter = completed.filter((a)=>{if(a.completed){return a}});
    return compFilter;
}

export {
    checkTodos,
    showTasks,
    filterAll,
    filterActive,
    filterCompleted
};