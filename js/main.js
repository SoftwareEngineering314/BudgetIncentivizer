import { loadData } from "./data.js";
import { renderTasks } from "./render.js";
import { addCheckboxListeners } from "./events.js";
import { handleCheckboxChange } from "./ui.js";

function startup() {
    loadData();
    renderTasks();
    addCheckboxListeners();
    handleCheckboxChange();
}

startup();
