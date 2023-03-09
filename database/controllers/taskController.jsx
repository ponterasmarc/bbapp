import Task from "../models/taskModel";

// <--- GET ALL TASK --->
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    if (!tasks) {
      res.status(404).json({ error: "Tasks not found" });
    }
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data." });
  }
};

// <--- GET TASK --->
export const getTask = async (req, res) => {
  const { taskId } = req.query;
  try {
    const task = await Task.findById(taskId);

    if (!task) {
      res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data." });
  }
};

// <--- CREATE TASK --->
export const postTask = async (req, res) => {
  try {
    const task = req.body;

    Task.create(task, function (err, newTask) {
      if (err) {
        res.status(400).json({ error: "Error in adding task" });
      } else {
        res.status(201).json({
          message: "Task added successfully.",
          task: newTask,
        });
      }
    });
  } catch (error) {
    res.status(400).json({ error: "Error in adding task" });
  }
};

// <--- UPDATE TASK --->
export const putTask = async (req, res) => {
  try {
    const task = req.body;
    const { taskId } = req.query;
    if (imprint && taskId) {
      Task.findByIdAndUpdate(
        taskId,
        task,
        { new: true },
        function (err, updatedTask) {
          if (err) {
            res.status(400).json({ error: "Error in updating the task" });
          } else {
            res.status(200).json({
              message: "Task updated successfully.",
              imprint: updatedTask,
            });
          }
        }
      );
    }
  } catch (error) {
    res.status(400).json({ error: "Error in updating the task" });
  }
};

// <--- DELETE TASK --->
export const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.query;

    if (taskId) {
      Task.findByIdAndDelete(taskId, function (err) {
        if (err) {
          res.status(400).json({ error: "Error in deleting the task" });
        } else {
          res.status(200).json({
            message: "Task deleted successfully.",
          });
        }
      });
    }
  } catch (error) {
    res.status(404).json({ error: "Error in deleting the task" });
  }
};
