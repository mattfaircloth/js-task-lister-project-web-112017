/*
list is responsible for creating a single list component
*/
let store = {lists: []};

const List = (() => {
  let id = 1
  return class List {
    constructor(title) {
      this.title = title;
      this.id = id++;
      this.tasks = [];
      store.lists.push(this);

    }

    addTask(task){
     this.tasks[task.id] = task
   }

    createList() {

      const lists = document.getElementById("lists")
      //let uniqueId = 0;

      const newDiv = document.createElement("div");
      newDiv.classList.add("list");
      newDiv.setAttribute('id' , `list-${this.id}`)

      const newH2 = document.createElement("h2")
      newH2.innerText = this.title;

      const button = document.createElement("BUTTON")
      button.innerText = "X";
      button.classList.add("delete-list")
      //button.setAttribute("data-id", `${++uniqueId}`)

      newH2.prepend(button);
      newDiv.append(newH2);
      lists.append(newDiv);

      const dropdown = document.getElementById("parent-list")
      let newOption = document.createElement("option")
      newOption.value = this.title
      newOption.innerText = this.title
      newOption.setAttribute('id' , `opt-${this.id}`)
      dropdown.append(newOption)
    }
  }

})()
