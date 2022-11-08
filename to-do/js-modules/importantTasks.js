function createImpTasks() {
    const main = document.querySelector("main");
    main.innerHTML = `<h1>Important Tasks</h1> 
    <hr>
    <h2>get dis stuff done NOWWW</h2>`;
    return;
  }
  
  export function setImpTasks() {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createImpTasks());
  }