
// function to add todos to local storage
function addToLocalStorage(todos) {
    // conver the array to string then store it.
    localStorage.setItem('todos', JSON.stringify(todos));
}

  // function helps to get everything from local storage
function getFromLocalStorage() {
    const reference = localStorage.getItem('todos');
    // if reference exists
    if (reference) {
      // converts back to array and store it in todos array
      let todos = JSON.parse(reference);
      return todos;
    }
}

export {
    addToLocalStorage,
    getFromLocalStorage,
}