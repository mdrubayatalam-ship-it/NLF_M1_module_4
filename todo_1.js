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
    // li.textContent = taskInput.value;
    // taskList.appendChild(li);
    // taskInput.value = "";

    let span = document.createElement("span");
 span.textContent = taskInput.value;
let btnWrapper = document.createElement("span");

let completeBtn = document.createElement("button");
completeBtn.textContent = "✅";
let deleteBtn = document.createElement("button");
deleteBtn.textContent = "❌";

li.appendChild(span);
li.appendChild(btnWrapper);



btnWrapper.appendChild(completeBtn);
btnWrapper.appendChild(deleteBtn);

if(taskInput.value != ""){
    taskList.appendChild(li);
}
else return 0;


taskInput.value = "";

 
})



taskInput.addEventListener("keydown",(event)=>{
    if (event.key === "Enter" && taskInput.value != ""){
    let li = document.createElement("li")
    // li.textContent = taskInput.value;
    // taskList.appendChild(li);
    // taskInput.value = "";
   
    let span = document.createElement("span");
    span.textContent = taskInput.value;
    let btnWrapper = document.createElement("span");

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "✅";    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    btnWrapper.appendChild(completeBtn);
    btnWrapper.appendChild(deleteBtn);
   
    li.appendChild(span);
    li.appendChild(btnWrapper);

    taskList.appendChild(li);

    taskInput.value = "";
    

    }
})

// creating Element
// let li = document.createElement("li")
// // console.log(li);
// li.textContent = "Learn js";
// taskList.appendChild(li);