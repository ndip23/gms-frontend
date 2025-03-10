import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MemberCard from '../MemberCard/MemberCard';
import { useEffect, useState } from 'react';

const GeneralUser = () => {

    const [header, setHeader] = useState("");
    useEffect(() => {
        const func = sessionStorage.getItem('func');
        functionCall(func);
    }, [])
    const functionCall = async (func) => {
        switch (func) {
            case "monthlyJoined":
                setHeader("Montly Joined Members");
                break;
            case "ThreeDaysExpiry":
                setHeader("Expiry in Three Days Members");
                break;
            case "FourtoSevenDaysExpiry":
                setHeader("Expiry in 4 - 7 Days Members");
                break;
            case "Expired":
                setHeader("Expired");
                break;
            case "InActiveMembers":
                setHeader("Inactive Members");
                break;

        }
    }

    return (
        <div className='w-3/4 text-black p-5 flex-col h-[100vh]'>
            <div className='border-2 bg-black flex justify-between w-full text-white rounded-1g p-3 '>
                <Link to={'/dashboard'} className='border-2 pl-3 pr-3 pt-1 pb-1 rounded-2xl cursor-pointer hover:text-black hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                    <ArrowBackIcon /> Back to Dashboard
                </Link>
            </div>
            <div className='mt-5 text-xl text-black '>
                {header}
            </div>
            <div className='bg-slate-100 p-5 mt-5 rounded-1g grid  gap-2 grid-cols-3 overflow-x-auto h-[80%]'>
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
            </div>
        </div >
    );
}
export default GeneralUser;