let addButton = document.getElementById("addbtn");
let addDesc = document.getElementById("Add-disc");
let Container = document.getElementById("entredTask");
let elementsTask = document.getElementById("elementsTask");
let doing = document.getElementById("elementsTask2");
let done = document.getElementById("elementsTask3");
let taskTitle = document.getElementById("task-title");
let pSelection = document.getElementById("pSelection");
let dateInput = document.getElementById("input-date");
let form = document.getElementById("form");
let pregressInfos = document.getElementById("status");

let saveChanges = document.getElementById("edit-btn");

let array = [];

let currentEditingIndex = -1;







form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  if (
    addDesc.value !== "" && 
    taskTitle.value !== "" &&
    dateInput.value !== "" &&
    pSelection.value !== "insert-selection" &&
    pregressInfos.value !== "status"
  ) {
    add_to_array(taskTitle, addDesc, dateInput, pSelection, pregressInfos);
  } else {
    alert("please fill all of the fields !");
  }
  addDesc.value = "";
  taskTitle.value = "";
  dateInput.value = "";
  pSelection.value = "insert-selection";
  pregressInfos.value = "status";
});

var task_object;

function add_to_array(taskname, desc, date, pr,stat) {
  task_object = {
    title: taskname.value,
    desc: desc.value,
    date: date.value,
    pr: pr.value,
    status : stat.value,
  };
  array.push(task_object);
  addTask(array);
}


// add task
function addTask(array) {

  elementsTask.innerHTML = "";
  doing.innerHTML = "";
  done.innerHTML = "";

  



  let todoCount =  array.filter(task_object => task_object.status === "todo").length;
  let inProgressCount =  array.filter(task_object => task_object.status === "doing").length;
  let doneCount =  array.filter(task_object => task_object.status === "done").length;

  let todoTaskCount = document.getElementById("todo-count");
  let doingTaskCount = document.getElementById("doing-count");
  let doneTaskCount = document.getElementById("done-count");



  

  

  array.forEach((task_object, index) => {
    let div = document.createElement("div");
    div.className = "task-item";
    div.style.paddingTop = "16px";
    div.style.paddingLeft = "16px";
    div.style.paddingRight = "16px";
    div.style.borderRadius = "6px";
    div.style.marginBottom = "16px";

    let title = document.createElement("h3");
    title.innerText = task_object.title;
    title.style.fontWeight = "600";

    let description = document.createElement("p");
    description.innerText = task_object.desc;

    //description style
    description.style.paddingtop = "16px";

    let date = document.createElement("span");
    date.innerText = task_object.date;

    


    let priority = document.createElement("span");
    priority.innerText = task_object.pr;

    if (task_object.pr === "priorety 1") {
      div.style.backgroundColor = "rgb(252 165 165)";
    } else if (task_object.pr === "priorety 2") {
      div.style.backgroundColor = "rgb(253 224 71)";
    } else if (task_object.pr === "priorety 3") {
      div.style.backgroundColor = "#81C784";
    }


    let editButton = document.createElement("button");
    editButton.setAttribute("id","edit-btn")
    editButton.setAttribute("onclick","show_model()")
    editButton.innerHTML = "Edit";
    

    // style edit button
    editButton.style.backgroundColor = "rgb(34 197 94)";
    editButton.style.padding = "12px";
    editButton.style.borderRadius = "6px";
    editButton.style.margin = "16px 0";
    editButton.style.cursor = "pointer";
 
    editButton.addEventListener("click", () => show_model(index));

    //delete 
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    deleteButton.addEventListener("click", () => {
      
      

      const isConfirmed = confirm("Confirm Delete?");
      if (index > -1 && isConfirmed) {
        
        array.splice(index, 1);
        
        if(todoTaskCount.innerHTML === "1"){
          todoTaskCount.innerHTML = "0";
        } else if(doingTaskCount.innerHTML === "1"){
          doingTaskCount.innerHTML = "0";
        } else if(doneTaskCount.innerHTML === "1"){
          doneTaskCount.innerHTML = "0";
        }
        
        addTask(array);

        
      }
      
    });

    // style delete button
    deleteButton.style.background = "rgb(239 68 68)";
    deleteButton.style.padding = "12px";
    deleteButton.style.borderRadius = "6px";
    deleteButton.style.margin = "16px 0";
    deleteButton.style.cursor = "pointer";

    let buttonDiv = document.createElement("span");
    buttonDiv.style.display = "flex";
    
    buttonDiv.style.justifyContent = "flex-end";
    buttonDiv.style.gap = "20px";
    buttonDiv.appendChild(editButton);
    buttonDiv.appendChild(deleteButton);

    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(date);
    div.appendChild(buttonDiv);

    
    if (task_object.status === "todo") {

      elementsTask.appendChild(div);
      todoTaskCount.innerHTML = todoCount;

    } else if (task_object.status === "doing") {
      doing.appendChild(div);
      doingTaskCount.innerHTML = inProgressCount;
    } else if (task_object.status === "done") {
      done.appendChild(div);
      doneTaskCount.innerHTML = doneCount;
    }
    
  });
}

//edit part :

function show_model(index) {

  currentEditingIndex = index; 
  document.getElementById('modal').style.display = "flex";
  
  
  

  if (currentEditingIndex > -1) {

    document.getElementById("edit-task-title").value = array[currentEditingIndex].title;
    document.getElementById("edit-input-date").value = array[currentEditingIndex].date;
    document.getElementById("edit-desc").value = array[currentEditingIndex].desc;
    document.getElementById("edit-pSelection").value = array[currentEditingIndex].pr;
    document.getElementById("edit-status").value = array[currentEditingIndex].status;

    

  }

    saveChanges.addEventListener("click", function(event) {
    
    event.preventDefault();
    
    
    let editedTask = {
      title: document.getElementById("edit-task-title").value,
      desc: document.getElementById("edit-desc").value,
      date: document.getElementById("edit-input-date").value,
      pr: document.getElementById("edit-pSelection").value,
      status: document.getElementById("edit-status").value,
    };

    array[currentEditingIndex] = editedTask;
    
    

    toggleModal();
    addTask(array);
   
    
  });
  }

  


function toggleModal(){
document.getElementById('modal').style.display = "none"
}

