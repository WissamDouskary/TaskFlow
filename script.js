let addButton = document.getElementById("addbtn");
let addTaskInput = document.getElementById("Add-task-input");
let Container = document.getElementById("entredTask")


addButton.addEventListener("click" , function(){
    if(addTaskInput.value === ""){
        alert("please type a valid Task");
    }else{
        let addElement = document.createElement("p");
        console.log(addElement);
        addElement.innerHTML = addTaskInput.value;
        Container.appendChild(addElement);

    }
    addTaskInput.value = "";
    
})


