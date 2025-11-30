import { daily_tasks, weekly_tasks, days } from "../data/data.js";
import * as Daily from "./daily-calc.js";
import * as Weekly from "./weekly-calc.js";
import { sumPoints } from "./points.js";



export const Calc = {
    sumDay: i => Daily.sumDay(daily_tasks, i),
    currentDailyPoints: () => {
        let total = 0;
        for (let i = 0; i < days.length; i++) {
            total += Daily.sumDay(daily_tasks, i);
        }
        return total;
    },
    
    possibleDailyPoints: () => sumPoints(daily_tasks) * days.length,

    currentWeeklyPoints: () => {
        return Weekly.sumWeek(weekly_tasks);
    },
    possibleWeeklyPoints: () => sumPoints(weekly_tasks),

};
export function sumCheckboxes(taskMap, selectors) {
    let sum = 0;
    taskMap.forEach((value, id) => {
        const checkbox = document.querySelector(selectors(id));
        if (checkbox?.checked) {
            sum += value.pts;
        }
    });
    return sum;
}

export function completionPercentage(taskMap, completedPoints) {
    const possible = sumPoints(taskMap);
    if (!possible) return 0;
    return completedPoints / possible;
}