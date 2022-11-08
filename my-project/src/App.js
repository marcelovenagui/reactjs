import React, { useState } from 'react';

import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false,
    },
    {
      id: '2', 
      title: 'Ler Livros',
      completed: true,
    }
  ])

    return(
        <div>
          <div className='container'>{}</div>
          
        </div>
    )
}

export default App;
