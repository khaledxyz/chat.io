// React
import { useState } from 'react';

// Components
import Login from './components/Login/Login';

function App() {
    const [id, setId] = useState('');

    return(
        <Login onIdSubmit={setId}/>
    )
}

export default App
