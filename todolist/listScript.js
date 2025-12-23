  let input = document.querySelector("#input");
let btn = document.querySelector("#btn1");
let list = document.querySelector("#list");
let heading = document.querySelector("#h1");

btn.addEventListener("click", () => {
    let count = parseInt(localStorage.getItem("taskCount")) || 0;
    let task = input.value.trim();

    if (task === "") {
        alert("Enter the task...");
        return;
    }

    count++;
    localStorage.setItem("taskCount", count);
    localStorage.setItem(String(count), task);
    input.value = "";

    showTasks();
});

function showTasks() {
    heading.innerText = ""; // clear old content
    let count = parseInt(localStorage.getItem("taskCount")) || 0;

    for (let i = 1; i <= count; i++) {
        let store = localStorage.getItem(String(i));
        heading.innerText += store + "\n"; // append each task
    }
    heading.classList.add("show");
}

// Show existing tasks on page load
showTasks();
