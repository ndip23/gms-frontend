import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';

const MemberCard = () => {
    return (
        < Link to={'/member/123'} className = 'bg-white cursor-pointer rounded-lg p-3 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white' >
            <div className='w-28 h-28 justify-center relative items-center border-2 p-1 mx-auto rounded-full'>
                <img className='w-full h-full rounded-full' src='' alt='Profile Pic' />
                <CircleIcon className='absolute top-0 left-0' sx={{ color: "greenyellow" }} />
            </div>
            <div className='mx-auto mt-5 text-center text-xl font-semibold font-mono'>
                {"Ndip Samuel"}
            </div>
            <div className='mx-auto text-center text-xl font-mono mt-2'>
                {"+237-679267153"}
            </div>
            <div className='mx-auto text-center text-xl font-mono mt-2'>
                Next Bill Date: {"05-03-2025"}
            </div>
        </Link>
    );
}
export default MemberCard;