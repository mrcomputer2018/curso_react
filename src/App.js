import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import './App.css';
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks';


const App = () => {
    const [ tasks, setMTasks] = useState([
        { id: '1', title: 'Estudar programação', completed: false },
        { id: '2', title: 'Ler livros', completed: true },
    ])

    const handleTaskAddition = (taskTitle) => {
        const newTasks = [
            ...tasks,
            {
                title: taskTitle,
                id: uuidv4(),
                completed: false
            }
        ]

        setMTasks(newTasks)
    }

    const handleTaskClick = (taskId) => {
        const newTasks = tasks.map(task => {
            if (task.id === taskId) return { ...task, completed: !task.completed }

            return task
        })

        setMTasks(newTasks)
    }

    return (
        <>
            <div className="container">
                <h1>Minhas Tarefas</h1>

                <AddTasks 
                handleTaskAddition={  handleTaskAddition }
                />

                <Tasks tasks={tasks} handleTaskClick={ handleTaskClick }/>

            </div>
        </>
    );
}

export default App