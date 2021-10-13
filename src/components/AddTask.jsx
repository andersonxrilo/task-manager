import React, { useState } from 'react';
import "../css/AddTask.css";
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
    const [inputData,setInputData] = useState('');
    const handlerInputChange = (e)=>{
            setInputData(e.target.value);
    }
    const handleAddTaskClick = () => {
        if(inputData!==""){
            handleTaskAddition(inputData);
            setInputData("");
        }else{alert("Adicione algum texto pelo ao menos"); }
        
    }
    return ( 
        <>
        <div className="add-task-container">
        <input onChange={handlerInputChange} value={inputData} type="text" className="add-task-input" />
        <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
        </div>
        
        </div>
        
        </>
     );
}
 
export default AddTask;