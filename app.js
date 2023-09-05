const express = require("express");
const mongoose = require("mongoose")


const app = express()

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