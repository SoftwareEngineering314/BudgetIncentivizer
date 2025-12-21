import {setDailyTasks} from "./dailytasks.js";
import {refreshTable} from "../ui/render.js";
const userFile = $("#userFile");

userFile.on("change", function () {
    const files = this.files;
    loadFiles(files);
});

function loadFiles(files) {
    const file = files[0];
    file.text().then(text => {
        const data = JSON.parse(text);
        console.log(data);
        const userMap = new Map(data.map((file, i) => [`test-${i}`, file]));
        console.log(userMap);
        setDailyTasks(userMap);
        refreshTable();
    });
}
