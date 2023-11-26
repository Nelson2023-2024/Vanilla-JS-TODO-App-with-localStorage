const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

//When the add button is clicked
function addTask(){
    if(inputBox.value === ""){
        alert("Please enter a task")
    }
    else{
        //create an li and make it's value be same as the one in the inputBox and make it a child of listContainer
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)

        //create a span tag 
        let span = document.createElement('span')
        span.innerHTML = '<i class="fa-solid fa-x"></i>'
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
}


listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()