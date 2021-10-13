import React from 'react';
import {Redirect,useParams,useHistory } from 'react-router-dom';

import Button from './Button';

import "../css/TaskDetails.css";
const TaskDetails = ({tasks}) => {
    const params = useParams();
    const history = useHistory();
    const task = tasks.find(task => task.id.toString() === params.taskId );
    if(typeof task === 'undefined'){alert ("Não encontrou tarefa");
       return <Redirect to="/" />;
    }else{
    return ( 
        <>
        <div className="back-button-container">
            <Button onClick={()=>{history.goBack();}}>Voltar</Button></div>
            <div className="task-details-container">
                <h2>{task.title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eos numquam, minus, magni, debitis fugiat voluptates doloremque voluptate tempora architecto rerum quis assumenda exercitationem! Molestias cumque culpa quibusdam voluptates cum?</p>
            </div>
        
        </>

     );
    }
}
 
export default TaskDetails;