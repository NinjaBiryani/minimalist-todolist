const userinput = document.getElementById("todolist-userinput"); 
const addBtn = document.getElementById("todolist-add-btn"); 
const todoList = document.getElementById("todolist-todolist"); 


addBtn.addEventListener("click", function() {

    if (userinput.value.length > 0) {
        let li = document.createElement("li"); 
        // li.appendChild(document.createTextNode(userinput.value)); 
        li.innerHTML = userinput.value; 
        let contLi = document.createElement("div"); 
        contLi.appendChild(li);
        contLi.classList.add("liContainer"); 
        todoList.appendChild(contLi); 
        let span = document.createElement("span"); 
        span.innerHTML = "\u00d7"; 
        li.appendChild(span); 
    }
    userinput.value = ""; 
    // saveData()
}); 

todoList.addEventListener("click", function(event) {
    if(event.target.tagName === "LI") {
        event.target.classList.toggle("checked"); 
        // saveData(); 
    }
    else if(event.target.tagName === "SPAN"){ 
        event.target.parentElement.parentElement.remove(); 
        // saveData(); 
    }
}, false); 

// function saveData(){
//     localStorage.setItem("data", todoList.innerHTML); 
// }

// function showTask() {
//     todoList.innerHTML = localStorage.getItem("data"); 
// }

// showTask(); 

// CODE BY ZTM (adding the list elements) AND GREATSTACK- BUT I ADDED SOME EXTRA FEATURES (ABOVE)

// event.key is DEPRECATED! (BELOW)

// userinput.addEventListener("keydown", function() {
//     if (userinput.value.length > 0 && KeyboardEvent.key === "Enter") {

//     }
// })


