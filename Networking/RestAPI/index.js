import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.all("/", (req, res) => {
  res.send(`I am up!`);
});

const todos = [
  { id: "1", title: "Task 1", completed: false },
  { id: "2", title: "Task 2", completed: true },
  { id: "3", title: "Task 3", completed: false },
];

// READ
app.get("/todos", (req, res) => {
  res.json(todos);
});

// CREATE
app.post("/todos", (req, res) => {
  try {
    const newTodo = req.body;
    todos.push(newTodo);
    res.json({
      message: "New Todo Added",
    });
  } catch (error) {
    console.log(error);
  }
});

// UPDATE
app.put("/todos/:id", (req, res) => {
  const newTodoData = req.body;
  const todoIndex = todos.findIndex((todo) => todo.id === req.params.id);

  if (todoIndex !== -1) {
    todos[todoIndex] = {
      id: req.params.id,
      ...newTodoData,
    };
  }
  res.json({
    message: "Todo updated successfully",
  });
});

// DELETE
app.delete("/todos/:id", (req, res) => {
  const todoIndex = todos.findIndex((todo) => todo.id === req.params.id);

  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
  }
  res.json({
    message: "Todo deleted successfully",
  });
});

const PORT = 5111;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
