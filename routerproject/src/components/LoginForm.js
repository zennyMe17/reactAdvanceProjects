import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function LoginForm({setLoggedIn}) {

    

    

    const navigate = useNavigate();

    const[formData,setFormData] = useState({email:"",password:""})
    const [showPassword,SetShowPassword] = useState(false)

    function submitHandler(event){
        event.preventDefault();

        console.log("Im inside the login.js submitHandler Function")
        setLoggedIn(true)
        navigate("/dashboard");
    }

    function changeHandler(event){
        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ) )
    }

    return ( <form onSubmit={submitHandler}>

        <label>
            <p>
                Email Address<sup>*</sup>
            </p>
            <input
                required
                type="email"
                value={formData.email}
                onChange={changeHandler}
                placeholder="Enter Email id"
                name="email"
            />
        </label>

        <label>
            <p>
                Password<sup>*</sup>
            </p>
            <input
                required
                type={showPassword ? ("text") : ("password")}
                value={formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
            />

            <span onClick={()=> SetShowPassword((prev)=>!prev)}>
                {showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
            </span>

            <Link to="#">
                <p>Forgot Password</p>
            </Link>

        </label>

        <button>
            Sign In
        </button>

    </form> );
}

export default LoginForm;