import React,{useState} from 'react'
import './Signup.css';
import Modal from '../Modal/Modal';
import ForgotPassword from '../ForgotPassword/ForgotPassword';

const Signup = () => {

    const [forgotPassword, setforgotPassword] = useState(false);
    const handleClose = () => {
        setforgotPassword(prev=>!prev);
    }



    return (
        <div className='customSignup w-1/3 p-10 ml-10 bg-gray-50 bg-opacity-50 h-[450px] overflow-y-auto'>
                   <div className='font-sans text-white text-center text-3xl'>Register your gym</div>
                        <input type='email' placeholder='Enter Email' className='w-full p-2 my-10 border-2 rounded-1g'/>
                        <input type='text' placeholder='Enter Gym name' className='w-full p-2 mb-10 border-2 rounded-1g'/>
                        <input type='text' placeholder='Enter Username' className='w-full p-2 mb-10 border-2 rounded-1g'/>
                        <input type='password' placeholder='Enter Password' className='w-full p-2 mb-10 border-2 rounded-1g'/>
                        <input type='password' placeholder='Confirm Password' className='w-full p-2 mb-10 border-2 rounded-1g'/>
                        <input type='file' className='w-full p-2 mb-10 border-2 rounded-1g'/>
                        <img src='https://unsplash.com/photos/young-woman-exercising-with-dumbbells-in-the-gym-b00b-piDW4U' className='mb-10 h-[200px] w-[250px]' />
                        <div className='p-2 w-[80%] border-2 bg-slate-800 mx-auto rounded-1g text-white text-center text-1g hover:bg-white hover:text-black font-semibold cursor-pointer'>Register</div>
                        <div className='p-2 w-[80%] border-2 bg-slate-800 mx-auto rounded-1g mt-5 text-white text-center text-1g hover:bg-white hover:text-black font-semibold cursor-pointer' onClick={()=>handleClose()}>Forgot password</div>
                         {forgotPassword && <Modal header="Forgot Password" handleClose={handleClose} content={<ForgotPassword/>}/>}
                </div>
    )
}

export default Signup