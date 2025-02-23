// Handling user login/signup
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const signupLink = document.getElementById("signup-link");
    const loginLink = document.getElementById("login-link");

    // Toggle signup and login forms
    if (signupLink) {
        signupLink.addEventListener("click", function (e) {
            e.preventDefault();
            loginForm.style.display = "none";
            signupForm.style.display = "block";
        });
    }

    if (loginLink) {
        loginLink.addEventListener("click", function (e) {
            e.preventDefault();
            signupForm.style.display = "none";
            loginForm.style.display = "block";
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        let storedPassword = localStorage.getItem(username);
        if (storedPassword && storedPassword === password) {
            localStorage.setItem("loggedInUser", username);
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid credentials! Please try again.");
        }
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", function (e)  {
            e.preventDefault();
            let newUsername = document.getElementById("new-username").value;
            let newPassword = document.getElementById("new-password").value;

            if (localStorage.getItem(newUsername)) {
                alert("User already exists! Please choose a different username.");
            } else {
                localStorage.setItem(newUsername, newPassword);
                alert("Account created successfully! Please log in.");
                signupForm.style.display = "none";
                loginForm.style.display = "block";
            }
        });
    }
});

// Handling tasks
function addTask() {
    let taskName = document.getElementById("task-name").value;
    let taskDate = document.getElementById("task-name").value;

    if (!taskName || !taskDate) {
        alert("Enter task and date!");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ name: taskName, date: taskDate });
    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
    }

function displayTasks() {
    let taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task, index) => {
        let li = document.getElementById("li");
        li.innerHTML = `${task.name} - ${task.date} <button onclick="deleteTask(${index})">X</button`;
        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

// Load tasks on page load
if (document.getElementById("task-list")) {
    displayTasks();
}

let id = document.querySelector("#myid");
let mymode = "dark";
let body = document.querySelector("body");

id.addEventListener("click", () =>{
    if(mymode === "dark"){
        mymode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }else{
        mymode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    id.style.backgroundColor = "pink";
console.log(mymode);
});
let div = document.querySelector("#bug");
div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "skyBlue";
});
div.style.width = "500px";
div.style.height = "300";