import React, { useState } from 'react';

const ForgotPassword = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [otpValidated, setOtpValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [inputField, setInputField] = useState({email:"", otp:"",newPassword:"",conNewPassword:""});

    const handleOnChange= (event,name)=>{
        setInputField({...inputField,[name]:event.target.value})
    }
    console.log(inputField)


    const handleEmailSubmit = () => {
        console.log("Simulated sending OTP to:", email);
        setEmailSubmitted(true);
    };

    const handleOtpSubmit = () => {
        console.log("Simulated validating OTP:", otp);
        setOtpValidated(true);
    };

    const handleNewPasswordSubmit = () => {
        console.log("Simulated submitting new password:", newPassword);
    };

    return (
        <div className='w-full p-4'>
            {!emailSubmitted ? (
                <div className='w-full mb-5'>
                    <div className='mb-2'>Enter Your Email</div>
                    <input 
                        type= 'email' 
                        placeholder='Enter Email' 
                        className='w-1/2 p-2 rounded border-2 border-slate-400 mb-4' 
                        value={inputField.email}
                        onChange={(event)=>{handleOnChange(event,"email")}}
                    />
                    <div 
                        className='p-2 w-1/2 border-2 bg-slate-800 mx-auto rounded text-white text-center hover:bg-white hover:text-black font-semibold cursor-pointer' 
                        onClick={handleEmailSubmit}
                    >
                        Send OTP
                    </div>
                </div>
            ) : !otpValidated ? (
                <div className='w-full mb-5'>
                    <div className='mb-2'>Enter Your OTP</div>
                    <input 
                        type='text' 
                        placeholder='Enter OTP' 
                        className='w-1/2 p-2 rounded border-2 border-slate-400 mb-4' 
                        value={inputField.otp}
                        onChange={(event)=>{handleOnChange(event,"otp")}}
                    />
                    <div 
                        className='p-2 w-1/2 border-2 bg-slate-800 mx-auto rounded text-white text-center hover:bg-white hover:text-black font-semibold cursor-pointer' 
                        onClick={handleOtpSubmit}
                    >
                        Validate OTP
                    </div>
                </div>
            ) : (
                <div className='w-full mb-5'>
                    <div className='mb-2'>Set New Password</div>
                    <input 
                        type='password' 
                        placeholder='New Password' 
                        className='w-1/2 p-2 rounded border-2 border-slate-400 mb-4 flex' 
                        value={inputField.newPassword} 
                        onChange={(event)=>{handleOnChange(event,"newPassword")}}
                    />
                    <input 
                        type='password' 
                        placeholder='Confirm Password' 
                        className='w-1/2 p-2 rounded border-2 border-slate-400 mb-4' 
                        value={inputField.conNewPassword} 
                        onChange={(event)=>{handleOnChange(event,"conNewPassword")}}
                    />
                    <div 
                        className='p-2 w-1/2 border-2 bg-slate-800 mx-auto rounded text-white text-center hover:bg-white hover:text-black font-semibold cursor-pointer mt-3' 
                        onClick={handleNewPasswordSubmit}
                    >
                        Submit New Password
                    </div>
                </div>
            )}
        </div>
    );
}

export default ForgotPassword;