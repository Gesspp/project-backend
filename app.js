const express = require("express");
const mongoose = require("mongoose")
const taskRouter = require("./routers/task")


const app = express()
app.use(express.json());

app.use("/tasks", taskRouter)

async function main() {
 
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/tasks");
        app.listen(3001);
        console.log("Сервер ожидает подключения...");
    }
    catch(err) {
        return console.log(err);
    }
}

main();

process.on("SIGINT", async() => {
      
    await mongoose.disconnect();
    console.log("Приложение завершило работу");
    process.exit();

});