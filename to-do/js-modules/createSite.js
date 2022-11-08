import { setAllTasks } from "./allTasks";
import { setTodayTasks } from "./todayTasks";
import { setWeekTasks } from "./weekTasks";
import { setImpTasks } from "./importantTasks";
import { setCompTasks } from "./completeTasks";

const mainContent = document.querySelector("#container");

function createHeader() {
  const header = document.createElement("header");
  header.innerHTML = `<h1><i class="fa-regular fa-rectangle-list"></i> To-Do</h1>`;
  return header;
}

function createContent() {
  const sideMain = document.createElement("div");
  const aside = document.createElement("aside");
  const main = document.createElement("main");

  sideMain.classList.add("side-main");

  mainContent.appendChild(sideMain);
  sideMain.appendChild(aside);
  sideMain.appendChild(main);
  aside.appendChild(createSidebar());
  main.appendChild(setAllTasks());

  return sideMain;
}

function createSidebar() {
  const navigation = document.createElement("nav");
  navigation.classList.add("main-buttons");

  const allButton = document.createElement("button");
  allButton.innerHTML = `<i class="fa-solid fa-layer-group"></i>All`;
  allButton.classList.add("sidebar-btn", "active");
  allButton.addEventListener("click", () => {
    allButton.classList.add("active");
    todayButton.classList.remove("active");
    weekButton.classList.remove("active");
    importantButton.classList.remove("active");
    completedButton.classList.remove("active");
    setAllTasks();
  });

  const todayButton = document.createElement("button");
  todayButton.innerHTML = `<i class="fa-solid fa-calendar"></i> Today`;
  todayButton.classList.add("sidebar-btn");
  todayButton.addEventListener("click", () => {
    allButton.classList.remove("active");
    todayButton.classList.add("active");
    weekButton.classList.remove("active");
    importantButton.classList.remove("active");
    completedButton.classList.remove("active");
    setTodayTasks();
  });

  const weekButton = document.createElement("button");
  weekButton.innerHTML = `<i class="fa-regular fa-calendar-days"></i> This Week`;
  weekButton.classList.add("sidebar-btn");
  weekButton.addEventListener("click", () => {
    allButton.classList.remove("active");
    todayButton.classList.remove("active");
    weekButton.classList.add("active");
    importantButton.classList.remove("active");
    completedButton.classList.remove("active");
    setWeekTasks();
  });

  const importantButton = document.createElement("button");
  importantButton.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Important`;
  importantButton.classList.add("sidebar-btn");
  importantButton.addEventListener("click", () => {
    allButton.classList.remove("active");
    todayButton.classList.remove("active");
    weekButton.classList.remove("active");
    importantButton.classList.add("active");
    completedButton.classList.remove("active");
    setImpTasks();
  });

  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fa-regular fa-square-check"></i> Completed`;
  completedButton.classList.add("sidebar-btn");
  completedButton.addEventListener("click", () => {
    allButton.classList.remove("active");
    todayButton.classList.remove("active");
    weekButton.classList.remove("active");
    importantButton.classList.remove("active");
    completedButton.classList.add("active");
    setCompTasks();
  });

  const project = document.createElement("div");
  project.classList.add("project");

  const projectTitle = document.createElement("div");
  projectTitle.classList.add("project-title");
  projectTitle.innerHTML = `Projects <hr />`;

  const projectLinks = document.createElement("div");
  projectLinks.classList.add("project-buttons");

  const projectButton = document.createElement("button");
  projectButton.classList.add("sidebar-btn");
  projectButton.innerHTML = `<i class="fa-solid fa-pen-ruler"></i> Project 1`;

  navigation.appendChild(allButton);
  navigation.appendChild(todayButton);
  navigation.appendChild(weekButton);
  navigation.appendChild(importantButton);
  navigation.appendChild(completedButton);
  navigation.appendChild(project);
  project.appendChild(projectTitle);
  project.appendChild(projectLinks);
  projectLinks.appendChild(projectButton);

  return navigation;
}

export function buildSite() {
  mainContent.appendChild(createHeader());
  mainContent.appendChild(createContent());
  aside.appendChild(createSidebar());
}
