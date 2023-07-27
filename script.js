// Get references to DOM elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <button onclick="removeTask(this)">Remove</button>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
}

// Function to remove a task
function removeTask(button) {
  const li = button.parentNode;
  taskList.removeChild(li);
}
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }
  
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" onclick="toggleDone(this)">
      <span>${taskText}</span>
      <button onclick="removeTask(this)">Remove</button>
    `;
  
    taskList.appendChild(li);
    taskInput.value = '';
  }
  
  // Function to remove a task
  function removeTask(button) {
    const li = button.parentNode;
    taskList.removeChild(li);
  }
  
  // Function to toggle the "done" state of a task
  function toggleDone(checkbox) {
    const li = checkbox.parentNode;
    const taskText = li.querySelector('span');
    if (checkbox.checked) {
      taskText.style.textDecoration = 'line-through';
    } else {
      taskText.style.textDecoration = 'none';
    }
  }