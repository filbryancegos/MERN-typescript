const router = require("express").Router();
const Todo = require("../models/Todo");

router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.status(201).json(
    {
      todos,
      "success": true
    }
  );
});

router.post('/', async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
    completed: false
  });
  await todo.save();
  res.status(201).json({
    todo,
    "message": "Successfully saved",
    "success": true,
  });
});

router.put('/:id', async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.completed = req.body.completed;
  await todo.save();
  res.json({
    todo,
    "message": "Updated successfully",
    "success": true,
  });
});

router.delete('/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ 
    message: 'Todo item deleted successfully',
    "success": true, 
  });
});

module.exports = router;
