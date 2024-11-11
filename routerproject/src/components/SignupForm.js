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
    const [ showConfirmPassword, SetShowConfirmPassword ] = useState(false)
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
            const finalData = {
                ...accountData,
                accountTye
            }
            
            console.log("Printing account details")
            console.log(finalData)
            navigate("/dashboard")


    }

    const [accountTye,setAccountTye] = useState("Student")
    return ( 
        <div>

        <div className='flex bg-richblue-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>

            <button onClick={()=>setAccountTye("Student")}
                className={`${accountTye === "Student"
                    ? "bg-richblue-900 text-richblack-5":
                    "bg-transparent text-richblack-200"
                } py-2 px-5 rounded-full transition-all duration-200`}>
                Student
            </button>
            <button onClick={()=>setAccountTye("Instructor")}
                className={`${accountTye === "Instructor"
                    ? "bg-richblue-900 text-richblack-5":
                    "bg-transparent text-richblack-200"
                } py-2 px-5 rounded-full transition-all duration-200`}>
                Instructor
            </button>

        </div>

        <form onSubmit={submitHandler} className=''>

            <div className='flex justify-between mt-[10px]'>

            <label className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                <p>First Name<sup className="text-pink-200">*</sup></p>
                <input
                    required
                    type="text"
                    name="firstName"
                    onChange={changeHandler}
                    placeholder="Enter First Name"
                    value={formData.firstName}
                    className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"/>
            </label>

            <label className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                <p>Last Name<sup className="text-pink-200">*</sup></p>
                <input
                    required
                    type="text"
                    name="lastName"
                    onChange={changeHandler}
                    placeholder="Enter First Name"
                    value={formData.lastName}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"/>
            </label>

            </div>

            <div className='flex gap-x-4 mt-[20px]'>
            <label className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] w-full ">
                <p>Email Address<sup className="text-pink-200">*</sup></p>
                <input
                    required
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    placeholder="Enter Email Address"
                    value={formData.email}
                    className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"/>
            </label>
            </div>

            

            <div className='flex justify-between mt-[20px]'>

            <label className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] relative">
                <p>Create Password<sup className="text-pink-200">*</sup></p>
                <input
                    required
                    type={showPassword?("text"):("password")}
                    name="password"
                    onChange={changeHandler}
                    placeholder="Enter Password"
                    value={formData.password}
                    className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"/>

                <span onClick={()=> SetShowPassword((prev)=>!prev)} className="absolute right-3 top-[38px] cursor-pointer">
                {showPassword?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                </span>

            </label>

            <label className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] relative">
                <p>Confirm Password<sup className="text-pink-200">*</sup></p>
                <input
                    required
                    type={showPassword?("text"):("password")}
                    name="confirmPassword"
                    onChange={changeHandler}
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"/>

                <span onClick={()=> SetShowConfirmPassword((prev)=>!prev)} className="absolute right-3 top-[38px] cursor-pointer">
                {showConfirmPassword?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                </span>

            </label>

            </div>

            <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-7">
                Create Account
            </button>

        </form>



        </div>
     );
}

export default SignupForm;