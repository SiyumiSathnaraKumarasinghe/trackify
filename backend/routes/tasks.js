const express = require('express');
const Task = require('../models/task');

const router = express.Router();

// GET all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).send(err);
  }
});

// POST new task
router.post('/', async (req, res) => {
  const { title, description, dueDate, completed } = req.body;
  const newTask = new Task({ title, description, dueDate, completed });
  try {
    await newTask.save();
    res.json(newTask);
  } catch (err) {
    res.status(500).send(err);
  }
});

// PUT update task
router.put('/:id', async (req, res) => {
  const { title, description, dueDate, completed } = req.body;
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, dueDate, completed },
      { new: true }
    );
    res.json(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

// DELETE task
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
