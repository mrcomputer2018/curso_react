import React from 'react';

import './Task.css';

const Task = ({ task }) => {
    console.log(task);

    return (
        <div className="task-container">
            <div className="task-header">
                <div>{ task.title }</div>
            </div>
        </div>
    );
}

export default Task;