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

let array = [];




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
  pregressInfos = "status";
});

function add_to_array(taskname, desc, date, pr,stat) {
  let task_object = {
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


  array.forEach((task_object) => {
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
      div.style.backgroundColor = "red";
    } else if (task_object.pr === "priorety 2") {
      div.style.backgroundColor = "yellow";
    } else if (task_object.pr === "priorety 3") {
      div.style.backgroundColor = "green";
    }


    let editButton = document.createElement("button");
    editButton.innerHTML = "Edit";

    // style edit button
    editButton.style.backgroundColor = "rgb(34 197 94)";
    editButton.style.padding = "12px";
    editButton.style.borderRadius = "6px";
    editButton.style.margin = "16px 0";
    editButton.style.cursor = "pointer";
 

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    deleteButton.addEventListener("click", () => {
      const taskIndex = array.indexOf(task_object);
      const isConfirmed = confirm("Confirm Delete?");
      if (taskIndex > -1 && isConfirmed) {
        array.splice(taskIndex, 1);
        
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
    } else if (task_object.status === "doing") {
      doing.appendChild(div);
    } else if (task_object.status === "done") {
      done.appendChild(div);
    }
  });
}

