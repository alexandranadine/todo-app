function createCompTasks() {
    const main = document.querySelector("main");
    main.innerHTML = `<h1>Completed Tasks</h1> 
    <hr>
    <h2>dis stuff is done</h2>`;
    return;
  }
  
  export function setCompTasks() {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createCompTasks());
  }