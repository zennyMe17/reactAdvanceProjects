import React, { useEffect } from 'react'
import Template from '../components/Template';
function Login({setLoggedIn}) {      
    
    return ( <div>
        <Template
            title="Welcome Back"
            desc1="Build skills for today, tommorow, and beyond"
            desc2="Education to future-proof your career"
            image="login"
            formtype="login"
            setLoggedIn={setLoggedIn}
        />
    </div> );
}

export default Login;