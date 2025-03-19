import { Link } from 'react-router-dom';
import { useId } from 'react';

function Login() {
    return (
        <form>
            <h2>Please Enter Company Username and Password</h2>
            <label>
                Your Username:
                <input name="userName" />
            </label>
            <br />
            <label>
                Your Password: 
                <input name="userPassword" />
            </label>
            <br />
            <button>
                <Link to="/home">Log In</Link>
            </button>

        </form>

    );


}

export default Login