function createTodayTasks() {
    const main = document.querySelector("main");
    main.innerHTML = `<h1>Today's Tasks</h1> 
    <hr>
    <h2>get dis stuff done today</h2>`;
    return;
  }
  
  export function setTodayTasks() {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createTodayTasks());
  }