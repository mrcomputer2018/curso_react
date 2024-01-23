import React, { useState } from 'react';

import Button from './Button';
import './AddTasks.css';

const AddTasks = ({ handleTaskAddition }) => {

    const handleAddTaskClick = () => {
        handleTaskAddition(inputTask);
        setInputTask('');
    }

    const [inputTask, setInputTask] = useState('');

    return (
        <div className='addtasks-container'>
            <input 
            className='addtasks-input'
            type="text" 
            placeholder="Adicionar tarefa"
            onChange={ (event) => setInputTask(event.target.value) }
            value={ inputTask }
            />

            <div className='button-container'>
                <Button onClick={ handleAddTaskClick }>
                    Adicionar
                </Button>
            </div>
        </div>
    );
}

export default AddTasks;