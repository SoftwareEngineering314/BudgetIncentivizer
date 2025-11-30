import { days } from "../data/data.js";
import { sumPoints } from "./points.js";
import { sumCheckboxes, completionPercentage} from "./calc.js";

export function sumDay(taskMap, dayIndex) {
    return sumCheckboxes(
        taskMap,
        id => `input[data-task="${id}"][data-day="${dayIndex}"]`
    );
}


export function totalPossibleDailyPoints(taskMap) {
    return sumPoints(taskMap) * days.length;
}

export function currentDailyPoints(taskMap) {
    return sumPoints(taskMap);
}
export function dailyTaskCompletionPercentage(taskMap, completedPoints) {
    return (completionPercentage(taskMap, completedPoints))/7;
}