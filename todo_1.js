// console.log("todo");

let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

// console.log(taskInput,addBtn,taskList);

// let buttonAlt = document.querySelector("#addBtn");
// console.log(buttonAlt);

addBtn.addEventListener("click", ()=>{
    // console.log("btn-clicked");
    // console.log(`${taskInput.value}`);
    let li = document.createElement("li")
    li.textContent = taskInput.value;
    taskList.appendChild(li);
})

taskInput.addEventListener("keydown",(event)=>{
    if (event.key === "Enter"){
    let li = document.createElement("li")
    li.textContent = taskInput.value;
    taskList.appendChild(li);
    }
})

// creating Element
// let li = document.createElement("li")
// // console.log(li);
// li.textContent = "Learn js";
// taskList.appendChild(li);