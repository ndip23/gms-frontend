import React, { useState } from 'react';

const ForgotPassword = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [otpValidated, setOtpValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
                    <div>Enter Your Email</div>
                    <input 
                        type='email' 
                        placeholder='Enter Email' 
                        className='w-1/2 p-2 rounded border-2 border-slate-400' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <div 
                        className='p-2 w-2/3 border-2 bg-slate-800 mx-auto rounded text-white text-center hover:bg-white hover:text-black font-semibold cursor-pointer' 
                        onClick={handleEmailSubmit}
                    >
                        Send OTP
                    </div>
                </div>
            ) : !otpValidated ? (
                <div className='w-full mb-5'>
                    <div>Enter Your OTP</div>
                    <input 
                        type='text' 
                        placeholder='Enter OTP' 
                        className='w-1/2 p-2 rounded border-2 border-slate-400' 
                        value={otp} 
                        onChange={(e) => setOtp(e.target.value)} 
                    />
                    <div 
                        className='p-2 w-2/3 border-2 bg-slate-800 mx-auto rounded text-white text-center hover:bg-white hover:text-black font-semibold cursor-pointer' 
                        onClick={handleOtpSubmit}
                    >
                        Validate OTP
                    </div>
                </div>
            ) : (
                <div className='w-full mb-5'>
                    <div>Set New Password</div>
                    <input 
                        type='password' 
                        placeholder='New Password' 
                        className='w-1/2 p-2 rounded-1g border-2 border-slate-400 mb-3' 
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)} 
                    />
                    <input 
                        type='password' 
                        placeholder='Confirm Password' 
                        className='w-1/2 p-2 rounded-1g border-2 border-slate-400 flex' 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                    />
                    <div 
                        className='p-2 w-2/3 border-2 bg-slate-800 mx-auto rounded text-white text-center hover:bg-white hover:text-black font-semibold cursor-pointer mt-3' 
                        onClick={handleNewPasswordSubmit}
                    >
                        Submit New Password
                    </div>
                </div>
            )}
            <div className='mt-5'>
                <h3>Current State:</h3>
                <pre>{JSON.stringify({ email, otp, newPassword, confirmPassword }, null, 2)}</pre>
            </div>
        </div>
    );
}

export default ForgotPassword;