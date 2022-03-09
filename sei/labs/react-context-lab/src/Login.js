import React from 'react';
import { UserContext } from './UserContext';
import { useContext, useState } from 'react';
import { initialUserState } from './initialUserState'

function Login(props) {

    const { user, setUser } = useContext(UserContext);

    const [formState, setFormState] = useState("");

    function handleChange(event){
        setFormState(event.target.value);
    }


    function handleSubmit(event){
        event.preventDefault();
        setUser({ username: formState, lastLogin: Date() })
        // console.log(user);
    }

    function handleLogout(event){;
        setUser(initialUserState);
        //console.log(user);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username </label>
                <input 
                type="text"
                onChange={handleChange}
                id='username' 
                value={formState}
                />
                <button type='submit'>Log In</button>
                <button type="button" onClick={handleLogout}>Logout</button>
            </form>
        </div>
    );
}

export default Login;