import {daily_tasks, dailyTasksStatus} from "./dailytasks.js";

const taskHistory = {
    week: {
        types: {
            daily: {
                tasks: {},
                days: {}
            },
            weekly: {
                tasks: {},
            }
        }
    }
};

function addTaskHistory(date, dailyMap, weeklyMap){
    taskHistory.set(date, {daily: dailyMap, weekly: weeklyMap});
}
// structure for history should be something like (week,

function populateTaskHistory(date, dailyMap){}
export function populateTotals(type, map){
    const totals = new Map();
    map.forEach((value, id) => {
        let total = 0;
        for (let i = 0; i < 7; i++) {
            if(value.days[i]) total +=1;
        }
        totals.set(id, total);
        console.log(totals);
    });
}

/*
pseudocode
for each task in taskmap:
    daily task status -> task status

*/

function createWeekSnapshot(week){
    return {
        week,
        types: {
            daily: {
                tasks: new Map(),
                days: new Map(),
                totals: {
                    completedTasks: 0,
                    unfinishedTasks: 0,
                    completedPoints: 0
                },
            },
            weekly: {
                tasks: new Map(),
                totals: {
                    completedTasks: 0,
                    unfinishedTasks: 0,
                    completedPoints: 0
                },
            }
        }
    }
}