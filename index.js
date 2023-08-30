import express from "express";
import path from 'path';
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "public")));

var dailyTaskList = [];
var workTaskList = [];

app.get("/", (req, res) => {
    const date = new Date().toDateString();
    res.render("index.ejs", {date: date, dailyTaskList: dailyTaskList});
});

app.post("/", (req, res) => {
    var dailyTaks = req.body.newItem;
    dailyTaskList.push(dailyTaks);
    console.log(dailyTaskList);
    res.redirect("/")  ;
});

app.get("/work", (req, res) => {
    const workQuestions = [
        "What tasks are pending?",
        "What's on the work agenda?",
        "Are there any upcoming deadlines?",
        "What assignments are outstanding?",
        "What work items are due soon?"
    ];
    var workTitle = workQuestions[Math.floor(Math.random() * 5)]
    res.render("work.ejs", {workTitle: workTitle, workTaskList: workTaskList});
})

app.post("/work", (req, res) => {
    var workTaks = req.body.newItem;
    workTaskList.push(workTaks);
    console.log(workTaskList);
    res.redirect("/work")  ;
});

app.listen(port, () => {
    console.log(`This app is running on port ${port}`);
})