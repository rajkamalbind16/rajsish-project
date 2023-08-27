import React, { useState, useEffect } from "react";
import "./TaskPopup.css";

const TaskPopup = ({ onTaskSubmit, initialTask ,onDelete}) => {
  const isEditing = initialTask !== null;

  const [taskDetails, setTaskDetails] = useState({
    description: "",
    date: "",
    type: "",
  });

  useEffect(() => {
    if (initialTask) {
      setTaskDetails(initialTask);
    }
  }, [initialTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails({ ...taskDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskSubmit(taskDetails);
    setTaskDetails({
      description: "",
      date: "",
      type: "",
    });
  };
  return (
    <div className="task-popup-overlay">
      <div className="task-popup">
      <h2>{isEditing ? "Edit Task" : "Create a Task for the Team"}</h2>
          <form onSubmit={handleSubmit}>
            <div className="cardSame">
              <label>
                Add task description:
                <textarea
                  type="text"
                  name="description"
                  value={taskDetails.description}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="cardSame">
              <label>
                Due Date:
                <input
                  type="date"
                  name="date"
                  value={taskDetails.date}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="checkbox-container">
              
              <div className="cardSame">
                <label className="checkbox-label">
                  <input
                    type="radio"
                    name="type"
                    value="taskToDo"
                    checked={taskDetails.type === "taskToDo"}
                    onChange={() =>
                      setTaskDetails({ ...taskDetails, type: "taskToDo" })
                    }
                  />
                  Task to do
                </label>
              </div>

              <div className="cardSame">
                <label className="checkbox-label">
                    Status:
                  <input
                    type="radio"
                    name="type"
                    value="inProgress"
                    checked={taskDetails.type === "inProgress"}
                    onChange={() =>
                      setTaskDetails({ ...taskDetails, type: "inProgress" })
                    }
                  />
                  Progress
                </label>
              </div>

              <div className="cardSame">
                <label className="checkbox-label">
                  <input
                    type="radio"
                    name="type"
                    value="taskDone"
                    checked={taskDetails.type === "taskDone"}
                    onChange={() =>
                      setTaskDetails({ ...taskDetails, type: "taskDone" })
                    }
                  />
                  Task done
                </label>
              </div>
            </div>
            <div className="popup-buttons">
  <button type="submit">{isEditing ? "Save Changes" : "Create Task"}</button>
  {isEditing && <button onClick={onDelete}>Delete Task</button>}
</div>

          </form>
        </div>
    </div>
  );
};

export default TaskPopup;
