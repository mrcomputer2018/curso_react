import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { createBrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks';


const App = () => {
    const [ tasks, setTasks] = useState([
        { id: '1', title: 'Estudar programação', completed: false },
        { id: '2', title: 'Ler livros', completed: false },
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

        setTasks(newTasks)
    }

    const handleTaskClick = (taskId) => {
        const newTasks = tasks.map(task => {
            if (task.id === taskId) return { ...task, completed: !task.completed }

            return task
        })

        setTasks(newTasks)
    }

    const  handleTaskClickRemove = (taskId) => {
        const newTasks = tasks.filter(task => task.id !== taskId)

        setTasks(newTasks)
    }

    return (
        <Router>
            <div className="container">
                <h1>Minhas Tarefas</h1>

                <Route path="/" exact render={() => (
                    <>
                        <AddTasks 
                        handleTaskAddition={  handleTaskAddition }
                        />

                        <Tasks 
                        tasks={tasks} 
                        handleTaskClick={ handleTaskClick }
                        handleTaskClickRemove={ handleTaskClickRemove }/>
                    </>
                )}/>

            </div>
        </Router>
    );
}

export default App