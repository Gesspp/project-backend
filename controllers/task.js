const Task = require("../models/task");


const add = async (reg, res) => {
    res.end("Добавление задач");
}

module.exports = {
    add
}