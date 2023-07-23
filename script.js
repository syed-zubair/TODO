window.addEventListener('DOMContentLoaded', (event) => {
  const taskInput = document.getElementById('taskInput');
  const addButton = document.getElementById('addButton');
  const taskList = document.getElementById('taskList');
  
  addButton.addEventListener('click', addTask);
  taskList.addEventListener('click', handleTaskActions);
  taskList.addEventListener('keydown', handleTaskEdit);
  
  function addTask() {
    const taskName = taskInput.value.trim();
    
    if (taskName !== '') {
      const listItem = document.createElement('li');
      listItem.classList.add('taskItem');
      
      const taskNameSpan = document.createElement('span');
      taskNameSpan.classList.add('taskName');
      taskNameSpan.textContent = taskName;
      
      const editButton = document.createElement('button');
      editButton.classList.add('editButton');
      editButton.textContent = 'Edit';
      
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('deleteButton');
      deleteButton.textContent = 'Delete';
      
      listItem.appendChild(taskNameSpan);
      listItem.appendChild(editButton);
      listItem.appendChild(deleteButton);
      
      taskList.appendChild(listItem);
      
      taskInput.value = '';
    } else {
      alert('Please enter a valid task.');
    }
  }
  
  function handleTaskActions(event) {
    if (event.target.classList.contains('editButton')) {
      const listItem = event.target.closest('li');
      const taskNameSpan = listItem.querySelector('.taskName');
      
      const newTaskName = prompt('Edit the task:', taskNameSpan.textContent);
      
      if (newTaskName !== null) {
        taskNameSpan.textContent = newTaskName;
      }
    } else if (event.target.classList.contains('deleteButton')) {
      const listItem = event.target.closest('li');
      listItem.remove();
    }
  }
  
  function handleTaskEdit(event) {
    if (event.key === 'Enter') {
      const listItem = event.target.closest('li');
      const taskNameSpan = listItem.querySelector('.taskName');
      const editButton = listItem.querySelector('.editButton');
      
      const newTaskName = event.target.value.trim();
      
      if (newTaskName !== '') {
        taskNameSpan.textContent = newTaskName;
        event.target.blur();
      } else {
        alert('Please enter a valid task.');
        event.target.value = taskNameSpan.textContent;
      }
    }
  }
});
