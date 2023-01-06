import React, { useEffect, useRef, useState } from 'react';
import './SignIn.css'
import Homepage from './homepage'

function SignIn() {
    // access the user input details using useRef    
    const name = useRef()
    const email = useRef()
    const password = useRef()

    // get the saved signup,name, email, password detail from localstorage to check whether user is logged in or not
    const localsignup = localStorage.getItem("signup")
    const localname = localStorage.getItem("name")
    const localemail = localStorage.getItem("email")
    const localpassword = localStorage.getItem("password")

    // create the state for homepage to show if user is logged in, initally value is set to false
    const [showhome, setshowhome] = useState(false)
    
    // if use is only logged out, but user information strored in localstorage fetch it and show
    const [show, setshow] = useState(false)

    //use the useEffect to update the states
    useEffect(() => {
        if (localsignup) {
            setshowhome(true)
        }
        if(localemail){
            setshow(true)
        }
    })

    // handler to perform user signup and save details in localstorage
    const handleSignUp = () => {
        // get all the value provided by use and save to localstorage using setItem key:value
        if (name.current.value && email.current.value && password.current.value) {
            //console.log(name.current.value, email.current.value, password.current.value)
            localStorage.setItem("name", name.current.value)
            localStorage.setItem("email", email.current.value)
            localStorage.setItem("password", password.current.value)
            localStorage.setItem("signup", email.current.value)
            alert("Signup done successfully")
            window.location.reload()
        }
    }

    // handler to perform user signin if user info is still in localstorage
    const handleSignIn=()=>{
        // with correct details of credential, login the user and save the singup in localstorage to maintain state
        if (email.current.value==localemail && password.current.value==localpassword) {
            localStorage.setItem("signup", email.current.value)
            window.location.reload()
        }
        else{
            alert("Please provide correct credentials")
        }
    }
    return (
        <div>
            {showhome ? <Homepage /> :
                show?
                <div className='container'>
                    <h1>Hello {localname}</h1>
                    <div className='input_space'>
                        <input placeholder="Email" type='text' ref={email} required />
                    </div>
                    <div className='input_space'>
                        <input placeholder="Password" type='password' ref={password} required />
                    </div>
                    <button onClick={handleSignIn}>Sign In</button>
                </div>
                :
                <div className='container'>
                    <div className='input_space'>
                        <input placeholder="Name" type='text' ref={name} required />
                    </div>
                    <div className='input_space'>
                        <input placeholder="Email" type='text' ref={email} required />
                    </div>
                    <div className='input_space'>
                        <input placeholder="Password" type='password' ref={password} required />
                    </div>
                    <button onClick={handleSignUp}>Sign up</button>
                </div>
            }
        </div>
    );

}

export default SignIn;