// Components
import Login from './components/Login/Login';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
    const [id, setId] = useLocalStorage('id');

    return(
        <>
            <Login onIdSubmit={setId}/>
            <div>{id}</div>
        </>
    )
}

export default App
