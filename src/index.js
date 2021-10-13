import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

import './css/index.css';
import App from './App';
window._tasks=[];
window.fetchTasks = async () => {
  
  await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10',)
  .then(function (response) {
    
    window._tasks =response.data; 
    
    
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
    
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  
 
}


window.fetchTasks();