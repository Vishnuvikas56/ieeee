// const add = document.getElementById('add');
// const del = document.getElementById('delete');
// const noTasks = document.getElementById('TasksToday');
// const tasks = document.getElementsByClassName('taskMade');
// const textPH = document.getElementById('placeholderText');
// const taskDes = document.getElementById('taskDes');
// const taskDate = document.getElementById('date');
// const priority = document.getElementById('priority');
// const addTaskact = document.getElementById('addTaskact');
// const editTasks = document.getElementById('editTasks');
// const AllTasks = document.getElementById('tasks');
// const inputTask = document.getElementById('inputTask');
// const taskTime = document.getElementById('time');
// const taskLabel = document.getElementsByClassName('taskLabel');
// const taskDTP = document.getElementsByClassName('taskDTP');
// var taskCount = 0;
// var index = 0;
// const taskForm = document.getElementById('taskForm');
// function addTask(){
//     for (let i = 0; i < taskCount; i++) {
//         tasks[i].style.display = "block";
//     }
// }
// addTaskact.addEventListener("click",()=>{
//     editTasks.style.display = "flex";
//     noTasks.style.display = "block";
//     inputTask.style.display = "none";
//     addTask();
// })
// add.addEventListener("click", () => {
//     textPH.style.display = "none";
//     editTasks.style.display = "none";
//     noTasks.style.display = "none";
//     inputTask.style.display = "flex";
//     if(taskCount<5){
//         taskCount++;
//     }
//     index++;
// });
// del.addEventListener("click", () => {
    
// });
// taskForm.addEventListener('submit', function (e) {
//     e.preventDefault(); 
//     const x1 = taskDes.value;
//     const x2 = taskDate.value;
//     const x3 = taskTime.value;
//     const x4 = priority.value;
//     content["task"+(index)]["tasklabel"] = x1;
//     content["task"+(index)]["taskdtp"] = "On " + x2 + " At " + x3 + " and priority is " + x4;
//     document.getElementById("dtask"+(index)).innerHTML = content["task"+(index)]["tasklabel"];
//     document.getElementById("ltask"+(index)).innerHTML = content["task"+(index)]["taskdtp"];
// });
var content = {
    "task1" : {
        "tasklabel" : "",
        "taskdtp" : ""
    },
    "task2" : {
        "tasklabel" : "",
        "taskdtp" : ""
    },
    "task3" : {
        "tasklabel" : "",
        "taskdtp" : ""
    },
    "task4" : {
        "tasklabel" : "",
        "taskdtp" : ""
    },
    "task5" : {
        "tasklabel" : "",
        "taskdtp" : ""
    },
    "task6" : {
        "tasklabel" : "",
        "taskdtp" : ""
    }
};
const add = document.getElementById('add');
const del = document.getElementById('delete');
const noTasks = document.getElementById('TasksToday');
const tasks = document.getElementsByClassName('taskMade');
const textPH = document.getElementById('placeholderText');
const taskDes = document.getElementById('taskDes');
const taskDate = document.getElementById('date');
const priority = document.getElementById('priority');
const addTaskact = document.getElementById('addTaskact');
const editTasks = document.getElementById('editTasks');
const inputTask = document.getElementById('inputTask');
const taskTime = document.getElementById('time');
const taskLabel = document.getElementsByClassName('taskLabel');
const taskDTP = document.getElementsByClassName('taskDTP');
var taskCount = 0;
var index = 0;

// Function to add a new task
function addTask() {
    for (let i = 0; i < taskCount; i++) {
        tasks[i].style.display = "block";
    }
}

// Event listener for the "Add Task" button
addTaskact.addEventListener("click", () => {
    editTasks.style.display = "flex";
    noTasks.style.display = "block";
    inputTask.style.display = "none";
    addTask();
});

// Event listener for the "Add" button
add.addEventListener("click", () => {
    textPH.style.display = "none";
    editTasks.style.display = "none";
    noTasks.style.display = "none";
    inputTask.style.display = "flex";
    if (taskCount < 5) {
        taskCount++;
    }
    index++;
});

// Event listener for the "Delete" button
del.addEventListener("click", () => {
    if (index > 0) {
        // Remove the last task
        const lastTaskIndex = "task" + index;
        content[lastTaskIndex]["tasklabel"] = "";
        content[lastTaskIndex]["taskdtp"] = "";
        document.getElementById("dtask" + index).innerHTML = "";
        document.getElementById("ltask" + index).innerHTML = "";

        // Update task count and index
        taskCount--;
        index--;
    }
});

// Event listener for the task form submission
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const x1 = taskDes.value;
    const x2 = taskDate.value;
    const x3 = taskTime.value;
    const x4 = priority.value;
    const currentTaskIndex = "task" + index;
    content[currentTaskIndex]["tasklabel"] = x1;
    content[currentTaskIndex]["taskdtp"] = "On " + x2 + " At " + x3 + " and priority is " + x4;
    document.getElementById("dtask" + index).innerHTML = content[currentTaskIndex]["tasklabel"];
    document.getElementById("ltask" + index).innerHTML = content[currentTaskIndex]["taskdtp"];
});

// Initialize the content object

// Initialize content object with up to 6 tasks
for (let i = 1; i <= 6; i++) {
    content["task" + i] = {
        "tasklabel": "",
        "taskdtp": ""
    };
}
