import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, handleTaskClick, handleTaskClickRemove }) => {
    return (
        <>
            { tasks.map( (task) => 
                <Task 
                task={ task } 
                handleTaskClick={ handleTaskClick } 
                handleTaskClickRemove={  handleTaskClickRemove }/>
            )}
        </>
    )
}

export default Tasks