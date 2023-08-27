import React, { useState, useEffect } from "react";
import "./Task.css";
import logoo from '../img/bird.png';
import TaskPopup from "../Navbar/TaskPopup"; // Make sure to import the TaskPopup component

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null); // Change to null
  const [editPopUp, setEditPopUp] = useState(false);

  const cardColors = ["#06D6A0", "#30B7E3", "#FFD166", "#EF476F"];

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const handleCardClick = (task) => {
    setSelectedTask(task);
    setEditPopUp(true);
  };

  const handlePopClose = () => {
    setSelectedTask(null);
    setEditPopUp(false);
  };

  const handleEdit = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task === selectedTask ? updatedTask : task
    );

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    handlePopClose();
  };
  const handleDelete = () => {
    console.log("Delete button clicked"); // Add this line
    const updatedTasks = tasks.filter((task) => task !== selectedTask);
  
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  
    handlePopClose();
  };
  

  return (
    <div className="taskContainer">
      <div className="lopTaskHeading">
        <img src={logoo} alt="" className="" />
        <p>Website Developer Tracker</p>
      </div>

      <div className="taskDivFlex">
        <div className="taskStart">
          <h3 id="taskHeadingg">Task to do</h3>
          {tasks
            .filter((task) => task.type === "taskToDo")
            .map((task, index) => (
              <div
                key={index}
                className="taskCard"
                style={{ backgroundColor: cardColors[index % cardColors.length] }}
                onClick={() => handleCardClick(task)}

              >
                <h3>{task.description}</h3>
                <p>Due Date: {task.date}</p>
              </div>
              
            ))}
        </div>
        <div className="taskInProgress">
          <h3 id="taskHeadingg">In progress</h3>
          {tasks
            .filter((task) => task.type === "inProgress")
            .map((task, index) => (
              <div
                key={index}
                className="taskCard"
                style={{ backgroundColor: cardColors[index % cardColors.length] }}
                onClick={() => handleCardClick(task)}

              >
                <h3>{task.description}</h3>
                <p>Due Date: {task.date}</p>
              </div>              
            ))}


      {editPopUp && selectedTask && (
      <div>
        <TaskPopup
      initialTask={selectedTask}
      onTaskSubmit={handleEdit}
      onDelete={handleDelete}  />
        </div>

      )}
    </div>
          


        <div className="taskDone">
          <h3 id="taskHeadingg">Task done</h3>
          {tasks
         .filter((task) => task.type === "taskDone")
          .map((task, index) => (
            <div
              key={index}
              className="taskCard"
              style={{ backgroundColor: cardColors[index % cardColors.length] }}
              onClick={() => handleCardClick(task)}
            >
              <h3>{task.description}</h3>
              <p>Due Date: {task.date}</p>
            </div>
            ))}
        </div>


      </div>
    </div>
  );
};

export default Task;
