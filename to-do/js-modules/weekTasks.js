function createWeekTasks() {
    const main = document.querySelector("main");
    main.innerHTML = `<h1>This Week's Tasks</h1> 
    <hr>
    <h2>get dis stuff done soon</h2>`;
    return;
  }
  
  export function setWeekTasks() {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createWeekTasks());
  }