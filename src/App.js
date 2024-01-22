import React, { useState } from 'react'
import './App.css'

const App = () => {
    const [message, setMessage] = useState('Hello World!')

    return (
        <>
            <div className="container">
                <h1>{message}</h1>
            </div>

            <button onClick={() => setMessage('Helooo diferente')}>Mudar Mensagem</button>
        </>
    );
}

export default App