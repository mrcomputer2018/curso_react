import React, { useState } from 'react'

import './App.css';
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks';


const App = () => {
    const [ tasks, setMTasks] = useState([
        { id: '1', title: 'Estudar programação', completed: false },
        { id: '2', title: 'Ler livros', completed: true },
        
    ])

    return (
        <>
            <div className="container">
                <h1>Minhas Tarefas</h1>

                <AddTasks/>

                <Tasks tasks={tasks}/>

            </div>
        </>
    );
}

export default App