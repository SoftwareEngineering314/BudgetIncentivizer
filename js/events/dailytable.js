
import { Dom} from "./dom.js";
import {deleteTaskHelper, addCheckboxListeners} from "./events.js";

addCheckboxListeners();
$("#dailyTaskTable, #weeklyTaskTable").on("click", function (event) {
    deleteTaskHelper(event);
});
