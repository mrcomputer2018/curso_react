import React, { useState } from 'react';

import Button from './Button';
import './AddTasks.css';

const AddTasks = () => {
    const onClick = () => {
        
    }

    const [inputTask, setInputTask] = useState('');

    return (
        <div className='addtasks-container'>
            <input 
            className='addtasks-input'
            type="text" 
            placeholder="Adicionar tarefa"
            onInput={ (event) => setInputTask(event.target.value) }
            value={ inputTask}
            />

            <div className='button-container'>
                <Button onClick={ onClick }>
                    Adicionar
                </Button>
            </div>
        </div>
    );
}

export default AddTasks;