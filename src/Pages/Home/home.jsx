import React from 'react';
import Login from '../../Components/Login/Login';
import Signup from '../../Components/Signup/Signup';
import pic1 from '../../Components/Assets/pic1.jpg';

const Home = () => {
    return (
        <div className='w-full h-[100vh]'>
            <div className='border-2 border-slate-800 bg-slate-800 text-white p-5 font-semibold text-xl'>
                Welcome To Gym Management System
            </div>
            <div 
                className='w-full bg-cover flex justify-center h-[calc(100vh-60px)]' 
                style={{ backgroundImage: `url(${pic1})` }}
            >
                <div className='w-full lg:flex gap-32'>
                    <Login />
                    <Signup />     
                </div>
            </div>
        </div>
    );
}

export default Home;