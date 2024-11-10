import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
function SignupForm({setLoggedIn}) {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""

    })

    const [ showPassword, SetShowPassword ] = useState(false)

    function changeHandler(event){
        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name] : event.target.value
            }

        ) )
    }

    function submitHandler(event){
            event.preventDefault();
            if(formData.confirmPassword != formData.password){
                console.log("toast.error")
                return
            }
            
            setLoggedIn(true);
            console.log("toast.success")
            const accountData = {...formData};
            console.log("Printing account details")
            console.log(accountData)
            navigate("/dashboard")


    }

    return ( 
        <div>

        <div>

            <button>
                Student
            </button>
            <button>
                Instructor
            </button>

        </div>

        <form onSubmit={submitHandler}>

            <div>

            <label>
                <p>First Name<sup>*</sup></p>
                <input
                    required
                    type="text"
                    name="firstName"
                    onChange={changeHandler}
                    placeholder="Enter First Name"
                    value={formData.firstName}/>
            </label>

            <label>
                <p>Last Name<sup>*</sup></p>
                <input
                    required
                    type="text"
                    name="lastName"
                    onChange={changeHandler}
                    placeholder="Enter First Name"
                    value={formData.lastName}/>
            </label>

            </div>


            <label>
                <p>Email Address<sup>*</sup></p>
                <input
                    required
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    placeholder="Enter Email Address"
                    value={formData.email}/>
            </label>

            <div>

            <label>
                <p>Create Password<sup>*</sup></p>
                <input
                    required
                    type={showPassword?("text"):("password")}
                    name="password"
                    onChange={changeHandler}
                    placeholder="Enter Password"
                    value={formData.password}/>

                <span onClick={()=> SetShowPassword((prev)=>!prev)}>
                {showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                </span>

            </label>

            <label>
                <p>Confirm Password<sup>*</sup></p>
                <input
                    required
                    type={showPassword?("text"):("password")}
                    name="confirmPassword"
                    onChange={changeHandler}
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}/>

                <span onClick={()=> SetShowPassword((prev)=>!prev)}>
                {showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                </span>

            </label>

            </div>

            <button>
                Create Account
            </button>

        </form>



        </div>
     );
}

export default SignupForm;