import React, { useState } from 'react';

import Button from './Button';
import './AddTasks.css';

const AddTasks = () => {
    const title = 'Adicionar';
    const onClick = () => console.log('Clicou');
    const [inputTask, setInputTask] = useState('');

    return (
        <div className='.addtasks-container'>
            <input 
            className='addtasks-input'
            type="text" 
            placeholder="Adicionar tarefa"
            onInput={ (event) => setInputTask(event.target.value) }
            value={ inputTask}
            />

            <Button tilte={ title }/>
        </div>
    );
}

export default AddTasks;