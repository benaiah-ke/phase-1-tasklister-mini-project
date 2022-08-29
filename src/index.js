document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('create-task-form').addEventListener('submit', function(event){
    event.preventDefault();

    // Our input element
    var input = document.getElementById('new-task-description');

    // Get the new task from the input
    var task = input.value;

    // Add to list
    document.getElementById('tasks').innerHTML += `
      <li>${task}</li>
    `;

    // Clear the input
    input.value = '';
  });
});
