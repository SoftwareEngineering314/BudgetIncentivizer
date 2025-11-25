import { objectives, saveData } from "./data.js";
import { Dom } from "./dom.js";
import { addTaskHTML, renderTasks } from "./render.js";
import { handleCheckboxChange } from "./ui.js";
import { Statistics } from "./stats.js";
export function addCheckboxListeners() {
    Dom.tableBody.addEventListener("change", (e) => {
        if (e.target.matches("input[type='checkbox']")) {
            handleCheckboxChange();
        }
    });
}

// le buttons
Dom.addTaskBtn.addEventListener("click", () => {
    let taskName = document.getElementById("taskName").value;
    let taskPoints = Number(document.getElementById("taskPoints").value);
    const id = crypto.randomUUID();
    objectives.set(id, { task: taskName, pts: taskPoints });
    addTaskHTML(id, taskName, taskPoints);
    saveData();
    handleCheckboxChange();
    document.getElementById("taskName").value = "";
    document.getElementById("taskPoints").value = "";
});

Dom.tableBody.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-icon")) {
        const row = event.target.closest("tr");
        const id = row.dataset.id;
        objectives.delete(id);
        saveData();
        renderTasks();
        handleCheckboxChange();
    }
});

Dom.calculateStatsBtn.addEventListener("click", (event) => {
    const { bestDay, bestDayPts } = Statistics.calcBestDay();
    document.getElementById("bestDay").textContent = bestDay;
    document.getElementById("bestPoints").textContent = bestDayPts;

});