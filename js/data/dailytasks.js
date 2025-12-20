import {Data} from "./data.js";

export const daily_tasks = new Map([
    [crypto.randomUUID(), {task: "Log expenses daily", pts: 5, type: "daily", completed: []}],
    [crypto.randomUUID(), {task: "Stay under weekly budget", pts: 50, type: "daily", completed: []}],
    [crypto.randomUUID(), {task: "Have a no-spend day", pts: 20, type: "daily", completed: []}]
]);
export const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export function saveDailyTaskStatus() {
    localStorage.clear();
    daily_tasks.forEach((value, id) => {
        let daysList = [];

        for (let i = 0; i < days.length; i++) {
            const checkbox = $(`input[data-task='${id}'][data-day='${i}']`);
            daysList[i] = checkbox.is(":checked");
        }
        daily_tasks.set(id, {
            ...daily_tasks.get(id),
            completed: daysList
        });
        console.log([...daily_tasks.entries()]);
    });
    return daily_tasks;
}