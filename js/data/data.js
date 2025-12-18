export const daily_tasks = new Map([
    [crypto.randomUUID(), { task: "Log expenses daily", pts: 5, type: "daily" }],
    [crypto.randomUUID(), { task: "Stay under weekly budget", pts: 50, type: "daily" }],
    [crypto.randomUUID(), { task: "Have a no-spend day", pts: 20, type: "daily" }]
]);

export const weekly_tasks = new Map([]);

export const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const dailyTasksStatus = new Map();

export function saveDailyTaskStatus() {
    dailyTasksStatus.clear();
    Data.daily_tasks.forEach((value, id) => {
        let days = [];

        for (let i = 0; i < Data.days.length; i++) {
            const checkbox = $(`input[data-task='${id}'][data-day='${i}']`);
            days[i] = checkbox.is(":checked");
        }
        dailyTasksStatus.set(id, { days });
    });
    return dailyTasksStatus;
}


function saveMap(key, map) {
    localStorage.setItem(key, JSON.stringify([...map]));
}

function loadMap(key, map) {
    const stored = localStorage.getItem(key);
    if (!stored) return false;

    const entries = JSON.parse(stored);
    map.clear();
    for (const [id, value] of entries) {
        map.set(id, value);
    }
    return true;
}

export function saveData() {
    saveMap("dailyTasks", daily_tasks);
    saveMap("weeklyTasks", weekly_tasks);

    const status = saveDailyTaskStatus();
    saveMap("dailyTasksStatus", status);
}


export function loadData() {
    loadMap("dailyTasks", daily_tasks);
    loadMap("weeklyTasks", weekly_tasks);
    loadMap("dailyTasksStatus", dailyTasksStatus);
}

export const Data = {
    daily_tasks,
    weekly_tasks,
    days,
    saveData,
    loadData,
    saveDailyTaskStatus,
    dailyTasksStatus
};