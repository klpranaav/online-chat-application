import { Button } from '@mui/material';
import React from 'react';
import { auth, provider } from './firebase';
import "./Login.css";

function Login() {   
    const signIn = () =>{
        //do clever login....
        auth.signInWithPopup(provider).catch((error) => alert(error.message));

    };
    
    return (
        
        
        
        <div className='login'>

            <div className='login__logo'>

        

            </div>
            <Button onClick={signIn} > Sign In </Button>

        
            
        </div>
    )
}

export default Login
