import React, { useState } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import GroupsIcon from '@mui/icons-material/Groups';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ErrorIcon from '@mui/icons-material/Error';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [accordDashboard, setAccordDashboard] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);

    const toggleDashboard = () => {
        setAccordDashboard(prev => !prev);
    };

    const handleMenuClick = () => {
        setPopupVisible(true);
        setTimeout(() => {
            setPopupVisible(false);
        }, 2000); // Hide popup after 2 seconds
    };
    const handleOnCllickMenu =(value)=>{
        sessionStorage.setItem('func',value);
    }


    return (
        <div className='w-3/4 text-black p-5 relative'>
            <div className='w-full bg-black text-white rounded-lg flex p-3 justify-between items-center cursor-pointer'>
                <MenuIcon onClick={handleMenuClick} />
                <img className='w-8 h-8 rounded-full border-2' src="" alt="Profile" />
            </div>

            {popupVisible && (
                <div className='absolute p-3  bg-slate-900 text-white p-3 rounded-xl font-extralight'>
                    <div>Hi Welcome to out Gym Management System</div>
                    <p>Feel Free to ask any querries</p>
                </div>
            )}

            <div className='mt-5 pt-3 bg-slate-100 bg-opacity-50 grid gap-5 grid-cols-3 w-full pb-5 overflow-x-auto h-[80%]'>
                {/* Card Section */}
                <Link to={'/member'} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
                    <div className='h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
                    <div className='py-7 px-5 flex-col items-center w-full text-center rounded-b-lg hover:bg-black hover:text-white'>
                        <GroupsIcon sx={{ color: "green", fontSize: "50px" }} />
                        <p className='text-xl font-semibold font-mono my-3'>Joined Members</p>
                    </div>
                </Link>
                {/* card */}
                <Link to={'/specific/:monthy'} onClick={()=>handleOnCllickMenu("monthlyJoined")} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
                    <div className='h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
                    <div className='py-7 px-5 flex-col items-center w-full text-center rounded-b-lg hover:bg-black hover:text-white'>
                        <SignalCellularAltIcon sx={{ color: "purple", fontSize: "50px" }} />
                        <p className='text-xl font-semibold font-mono my-3'>Monthly Joined</p>
                    </div>
                </Link>
                {/* card */}
                <Link to={'/specific/:expiry-in-3days'} onClick={()=>handleOnCllickMenu("ThreeDaysExpiry")} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
                    <div className='h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
                    <div className='py-7 px-5 flex-col items-center w-full text-center rounded-b-lg hover:bg-black hover:text-white'>
                        <AccessAlarmIcon sx={{ color: "red", fontSize: "50px" }} />
                        <p className='text-xl font-semibold font-mono my-3'>Expiry within 3 days</p>
                    </div>
                </Link>
                {/* card */}
                <Link to={'/specific/:expiry-in-4days'} onClick={()=>handleOnCllickMenu("FourtoSevenDaysExpiry")} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
                    <div className='h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
                    <div className='py-7 px-5 flex-col items-center w-full text-center rounded-b-lg hover:bg-black hover:text-white'>
                        <AccessAlarmIcon sx={{ color: "red", fontSize: "50px" }} />
                        <p className='text-xl font-semibold font-mono my-3'>Expiry within 4-7 days</p>
                    </div>
                </Link>
                {/* card */}
                <Link to={'/specific/:expired'} onClick={()=>handleOnCllickMenu("Expired")} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
                    <div className='h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
                    <div className='py-7 px-5 flex-col items-center w-full text-center rounded-b-lg hover:bg-black hover:text-white'>
                        <ErrorIcon sx={{ color: "red", fontSize: "50px" }} />
                        <p className='text-xl font-semibold font-mono my-3'>Expired</p>
                    </div>
                </Link>
                {/* card */}
                <Link to={'/specific/:inactive-members'} onClick={()=>handleOnCllickMenu("InActiveMembers")} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
                    <div className='h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
                    <div className='py-7 px-5 flex-col items-center w-full text-center rounded-b-lg hover:bg-black hover:text-white'>
                        <ReportIcon sx={{ color: "brown", fontSize: "50px" }} />
                        <p className='text-xl font-semibold font-mono my-3'>Inactive members</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;