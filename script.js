let addButton = document.getElementById("addbtn");
let addTaskInput = document.getElementById("Add-task-input");
let Container = document.getElementById("entredTask");
let elementsTask = document.getElementById("elementsTask");



addButton.addEventListener("click" , function(){
    if(addTaskInput.value === ""){
        alert("please type a valid Task");
    }else{
        let addElement = document.createElement("div");
        addElement.innerHTML = addTaskInput.value ;

        let closeBtn = document.createElement("span");
        closeBtn.innerHTML = "x";
        closeBtn.style.cursor = "pointer";

        closeBtn.addEventListener("click" , function (){
            elementsTask.removeChild(addElement);
            elementsTask.removeChild(closeBtn);
        })
        
        //style for elements
        addElement.style.backgroundColor = "#608BC1"; 
        addElement.style.borderRadius = "15px";
        addElement.style.padding = "10px";
        addElement.style.marginBottom = "10px";
        

        closeBtn.style.backgroundColor = "#D9D9D9";
        closeBtn.style.color = "red";
        closeBtn.style.padding = "5px";
        closeBtn.style.borderRadius = "10px"
    
        
        elementsTask.appendChild(addElement);
        elementsTask.appendChild(closeBtn);
    }
    addTaskInput.value = "";
    
})


