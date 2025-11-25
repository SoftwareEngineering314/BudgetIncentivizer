import { objectives, days } from "./data.js";
import {sumDay} from "./calculations.js";

function calcBestDay(){
    let bestDay = null;
    let bestDayPts = -Infinity;
    for(let dayIndex= 0; dayIndex<days.length; dayIndex++){
        const day = days[dayIndex];
        let dayPts = sumDay(dayIndex);

        if(dayPts > bestDayPts){
            bestDay = day;
            bestDayPts = dayPts;
        }
    }
    console.log(bestDay, bestDayPts);
    return {bestDay, bestDayPts}
}

export const Statistics = {
    calcBestDay
};