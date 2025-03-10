import React, {useState}from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const[loginField,setLoginField] = useState({"userName":"","password":""});
    const navigate=useNavigate();
    const handleLogin =()=>{
        sessionStorage.setItem("isLogin",true)
        navigate('/dashboard')
    }
    const handleOnChange= (event,name)=>{
        setLoginField({...loginField,[name]:event.target.value})
    }
    console.log(loginField)
    return (
        <div className='w-1/3 p-10 ml-10 bg-gray-50 bg-opacity-50 h-fit'>
        <div className='font-sans text-white text-center text-3xl'>Login</div>
             <input value={loginField.userName} onChange={(event)=>{handleOnChange(event,"userName")}} type='text' placeholder='Enter Username' className='w-full p-2 my-10 border-2 rounded-1g'/>

             <input value={loginField.password}  onChange={(event)=>{handleOnChange(event,"password")}} type='password' placeholder='Enter Password' className='w-full p-2 mb-10 border-2 rounded-1g'/>

             <div className='p-2 w-[80%] border-2 bg-slate-800 mx-auto rounded-1g text-white text-center text-1g hover:bg-white hover:text-black font-semibold cursor-pointer' onClick={()=>{handleLogin()}}>Login</div>
     </div>
    )
}

export default Login