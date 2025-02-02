// script.js

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim(); // Get task text and remove leading/trailing spaces

        if (taskText !== "") { // Check if the input is not empty
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            // Add a delete button to each list item
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-button'); // Add a class for styling if you like
            listItem.appendChild(deleteButton);


            taskList.appendChild(listItem);
            taskInput.value = ''; // Clear the input field

            //Event listener for the delete button.  Important to add it *after* the button is created.
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(listItem);
            });

        }
    });

    alert('addTask');
    alert('addText');

    ["Remove", "remove-btn"];
    ["addButton.addEventListener"];


// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from actually submitting

        // Get form values
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Basic validation (you can add more robust checks)
        if (!username || !email || !password) {
            displayFeedback("error", "All fields are required.");
            return;
        }

        if (!isValidEmail(email)) {
            displayFeedback("error", "Invalid email format.");
            return;
        }

        if (password.length < 6) {
          displayFeedback("error", "Password must be at least 6 characters long.");
          return;
        }


        // Simulate successful registration (In a real application, you'd send data to a server)
        console.log("Registration successful:", { username, email, password });
        displayFeedback("success", "Registration successful!");
        form.reset(); // Clear the form after successful submission


    });

    function displayFeedback(type, message) {
        feedbackDiv.textContent = message;
        feedbackDiv.className = type; // Set class for styling (e.g., "error", "success")

        // You'll need to define CSS styles for .error and .success in your style.css
        // For example:
        // .error { color: red; }
        // .success { color: green; }
    }

    function isValidEmail(email) {
      // A more robust email validation regex is recommended for production
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
});

    

        // Add task on enter key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTaskBtn.click(); // Trigger the add button click
        }
    });


});



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
