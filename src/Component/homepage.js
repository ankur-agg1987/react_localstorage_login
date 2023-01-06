import React from "react";
import './SignIn.css';

function Home(){

    const logout=()=>{
        localStorage.removeItem("signup")
        window.location.reload()
    }

    const deleteAccount=()=>{
        localStorage.clear()
        window.location.reload()
    }

    return(
        <div>
            <h1>Home Page</h1>
            <button onClick={logout} className="logout">Logout</button>
            <button onClick={deleteAccount} className="delete">Delete Account</button>
        </div>
    );
}

export default Home;