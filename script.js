const app = document.getElementById('todo-app');
div.addEventListener('addTask', function(event) {
      event.preventDefault(); 

  const task-input = document.getElementById('task-input');
      const task-inputError = document.getElementById('task-inputError');
      if (task-inputInput.value.length < 3) {
        task-inputError.textContent = 'task must be at least 3 characters long.';
        return; 
    } 
        else {
        task-inputError.textContent = '';
      }
  
const addButton = document.getElementById(add-task-btn);

const taskInput =  document.getElementById(task-list);

  
//EXAMPLE CODE GIVEN
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

// Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
function addTask(taskText, save = true) {
    // Task creation logic remains the same

  document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    // Other initialization code
});

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}
