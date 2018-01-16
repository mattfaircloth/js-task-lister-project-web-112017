document.addEventListener('DOMContentLoaded', () => {
  console.log("The DOM content has loaded");
  // your code here ....

  //NEW LISTS


  const form = document.getElementById("create-list-form")
  function handleNewList(event) {
    event.preventDefault()

    let input = document.getElementById("new-list-title").value
    const list = new List(input)
    list.createList();
    input = '';
  }

  const taskForm = document.getElementById("create-task-form")
  function handleNewTask(event) {
    event.preventDefault()

    let description = document.getElementById("new-task-description").value
    let priority = document.getElementById("new-task-priority").value
    const task = new Task(description, priority)
    task.createTask();
    description = '';
    priority = '';
  }

  const lists = document.getElementById("lists")
  function deleteList(event) {
    if (event.target.tagName === "BUTTON") {
      event.target.parentNode.parentNode.remove()
    }
  }




  form.addEventListener("submit", handleNewList)
  taskForm.addEventListener("submit", handleNewTask)
  lists.addEventListener("click", deleteList)
});
