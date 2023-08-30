const express = require('express');
const router = express.Router();
const Task = require('../models/task');

//get all tasks
router.get('/', async(req, res) => {
    try{
        const tasks = await Task.find();
        res.json(tasks);
    }catch(e){
        res.status(500).json({message: e.message});
    }
})

//create a task
router.post("/", async(req,res) =>{
    const task = new Task({
        title: req.body.title,
        description: req.body.description
    })
    try{
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch(e){
        res.status(400).json({message: e.message});
    }
})


//update a task
router.patch('/:id', async(req,res) =>{

    try{
        const task = await Task.findById(req.params.id);
        if(req.body.title) task.title = req.body.title;
        if(req.body.description) task.description = req.body.description;
        if(req.body.completed) task.completed = req.body.completed;
        const updatedTask = await task.save();
        res.json(updatedTask);
    } catch(e){
        res.status(400).json({message: e.message});
    }
})

//delete a task
router.delete('/:id', async(req,res)=>{
    try{
        const task = new Task.findByIdAndDelete(req.params.id);
        res.json({message: 'Task Deleted'});
    }catch(e){
        res.status(500).json({message: e.message})
    }
})


// Delete a task
router.delete('/:id', async (req, res) => {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);
      res.json({ message: 'Task deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  })

module.exports = router;
