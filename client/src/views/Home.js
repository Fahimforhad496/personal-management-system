import React, { useState } from "react";
import { Card } from "react-bootstrap";

export const Home = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    
    const onSubmit = (event) => {
        event.preventDefault();
        alert(`Login: ${login}, password: ${password}`);
    };

    return (

        <div className="container">
        <form onSubmit={onSubmit}>
            <header></header>
            <label htmlFor="login">Login</label>
            <input
                onChange={(event) => setLogin(event.target.value)}
                id="login"
                name="login"
                type="text"
            />
            <label htmlFor="password">Password</label>
            
            <input
                onChange={(event) => setPassword(event.target.value)}
                name="password"
                type="password"
            />
            <button type="submit">Log in</button>
        </form>
        </div>
        
    );
};

export default Home;
