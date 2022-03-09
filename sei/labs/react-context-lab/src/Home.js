import React from 'react';
import { useContext } from 'react'
import { UserContext } from './UserContext'

function Home(props) {
    const { user } = useContext(UserContext);


    if (!user.username) {
        return <div>Welcome! Please log in</div>;
    } 
    
    return (
        <div>
            Welcome back, {user.username}! You logged in at {user.lastLogin}.
        </div>
    );
}

export default Home;