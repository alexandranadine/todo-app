function createAllTasks() {
  const main = document.querySelector("main");
  main.innerHTML = `<h1>All Tasks</h1> 
    <hr>
    <h2>get dis stuff done</h2>`;
  return;
}

export function setAllTasks() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createAllTasks());
}
