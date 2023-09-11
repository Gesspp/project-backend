const Task = require("../models/task");


const add = async (req, res) => {
    if (!req.body) return res.status(400).json({error: "no data"})
    console.log(req.body)
    const { title, color } = req.body;
    const task = new Task({title, color, done: false});
    await task.save();
    return res.status(201).json({message: "задача успешно создана"});
}

const all = async (req, res) => {
    const tasks = await Task.find();
    return res.status(200).json({tasks})
}
module.exports = {
    add,
    all
}