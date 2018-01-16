/*
task is responsible for creating a single task object
*/
const Task = (() => {
  let id = 1
  return class Task {
    constructor(description, priority) {
      this.id = id++
      this.description = description;
      this.priority = priority
      this.list
    }

    createTask() {

     //  let taskId = document.getElementById('parent-list').value
     //  store.lists.forEach(element => {
     //   if(element.id === parseInt(taskId)){
     //     element.tasks.push(task)
     //   }
     // })

        let counter = 0;
        //let listDiv = document.querySelector(".list")
        let listDiv = document.getElementById(`list-${counter + 1}`)
        let ul = document.createElement('ul')
        let li = document.createElement('li')
        li.innerHTML = `Description: ${this.description} <br> Priority: ${this.priority}`
        ul.appendChild(li)

      listDiv.append(ul);
    }
  }

})()
