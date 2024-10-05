const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const add = document.getElementById("add-task");
const remainingTaskShow = document.getElementById("remainingTask");
const TaskFinish = document.getElementById("FinishTask");

document.addEventListener("DOMContentLoaded", () => {
    let tasks = JSON.parse(localStorage.getItem('Tasks')) || [];
    tasks.forEach(task => addTask(task));
});

let remainingTask = 0;

add.addEventListener("click",()=>{
    let tasks = JSON.parse(localStorage.getItem('Tasks')) || [];

    if(input.value !== ""){
        tasks.push(input.value)
        localStorage.setItem('Tasks', JSON.stringify(tasks));
        addTask(input.value)
        input.value = "";
    }else{
        return;
    }

})

function addTask(task){
    const li = document.createElement("li");
    const remove = document.createElement('button');

    remove.classList.add('delete-btn');
    remove.textContent = "remove";

    li.textContent = task.toUpperCase();
    li.appendChild(remove);
    taskList.appendChild(li);
    remainingTask+= 1
    remainingTaskShow.textContent = `Task: ${remainingTask}`;
    

    remove.addEventListener("click", ()=>{
        let removeTask = JSON.parse(localStorage.getItem('Tasks')) || [];
        
        taskList.removeChild(li);
        remainingTask-= 1

        remainingTaskShow.textContent = `Task: ${remainingTask}`
        removeTask.splice(removeTask.indexOf(task),1);

        localStorage.setItem('Tasks', JSON.stringify(removeTask));

    })

}

