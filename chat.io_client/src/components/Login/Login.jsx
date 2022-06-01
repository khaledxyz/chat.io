// React
import { useRef } from 'react';

// Dependencies
import { nanoid } from 'nanoid'

// Styles
import './Login.scss';
import '../../sass/components/btn.scss';

const Login = ({ onIdSubmit }) => {
    const idRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        onIdSubmit(idRef.current.value);
    };

    const getNewId = () => {
        onIdSubmit(nanoid(10))
    };

    return(
    <div className="Login">
    <div className="Login__container">
        <form onSubmit={handleSubmit} className="Login__form">
            <h2>Welcome Back!</h2>
            <input type="text" ref={idRef} placeholder="Enter your ID" className="Login__form-id" required/>
            <div className='Login__form-buttons'>
                <input type="submit" value="Log In" className="Login__form-submit btn primary" required/>
                <button onClick={getNewId} className='btn secondary'>Sign Up</button>
            </div>
        </form>
    </div>
    </div>
    )
}
 
export default Login;