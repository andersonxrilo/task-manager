import React from 'react';
import { CgClose,CgInfo } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';

import "../css/Task.css";


const Task = ({task,handleTaskClick,handleTaskDeletion}) => {
    const history = useHistory();

    const handleTaskDetails = ()=>{
        history.push("/"+task.id);
    }

    return ( <div 
        
        style={task.completed ? { borderLeft:"6px solid chartreuse"}:{} } 
        className="task-container">
            <div className="task-title" onClick ={() => handleTaskClick(task.id)}>
            {task.title}
            
            </div>
            <div className="buttons-task">
                <button onClick ={() => handleTaskDeletion(task.id)} className="remove-task-button">
                    <CgClose />
                    </button>
                    <button onClick={() => handleTaskDetails(task.id)} className="see-task-details-button">
                    <CgInfo />
                    </button>
            </div>
            
            </div> );
}
 
export default Task;