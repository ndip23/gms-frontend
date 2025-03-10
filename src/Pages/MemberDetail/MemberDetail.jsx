import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Switch from 'react-switch';

const MemberDetail = () => {
    const [status, setStatus] = useState("Pending");
    const [renew, setRenew] = useState(false);
    const navigate = useNavigate();

    const handleSwitchBtn = (checked) => {
        setStatus(checked ? "Active" : "Pending");
    };

    return (
        <div className='w-3/4 text-black p-5 h-[100vh]'>
            <div onClick={() => { navigate(-1) }} className='border-2 w-fit cursor-pointer text-xl font-sans text-white p-2 rounded-xl bg-black hover:text-black hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                <ArrowBackIcon /> Go Back
            </div>
            <div className='mt-10 p-2'>
                <div className='w-[100%] h-fit flex'>
                    <div className='w-1/3 mx-auto'>
                        <img src="" className='w-full mx-auto' alt="Profile" />
                    </div>
                    <div className='w-2/3 mt-5 text-xl p-5'>
                        <div className='mt-1 mb-2 text-2xl font-semibold'>Name: Danish</div>
                        <div className='mt-1 mb-2 text-2xl font-semibold'>Mobile: +237679267153</div>
                        <div className='mt-1 mb-2 text-2xl font-semibold'>Address: Bonaberi Douala</div>
                        <div className='mt-1 mb-2 text-2xl font-semibold'>Joined Date: 08-03-2025</div>
                        <div className='mt-1 mb-2 text-2xl font-semibold'>Next Bill Date: 08-04-2025</div>
                        <div className='mt-1 mb-2 flex gap-4 text-2xl font-semibold'>
                            Status 
                            <Switch 
                                onColor='#6366F1' 
                                checked={status === "Active"} 
                                onChange={handleSwitchBtn} 
                            />
                        </div>
                        <div 
                            onClick={() => { setRenew(prev => !prev); }} 
                            className={`mt-1 rounded-xl p-3 border-2 border-black text-center ${renew && status === "Active" ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : ''} w-full md:w-1/2 cursor-pointer hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}
                        >
                            Renew
                        </div>
                        {
                            renew && status === "Active" && (
                                <div className='rounded-xl p-3 mt-5 mb-5 h-fit bg-slate-50 w-[100%]'>
                                    <div className='w-full'>
                                        <div className='my-5'>
                                            <div>Membership</div>
                                            <select className='w-full border-2 p-2 rounded-lg'>
                                                <option>1 Month Plan</option>
                                                <option>2 Month Plan</option>
                                                <option>3 Month Plan</option>
                                            </select>
                                            <div className='mt-3 rounded-xl p-3 border-2 border-black text-center w-1/2 cursor-pointer hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Save</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MemberDetail;