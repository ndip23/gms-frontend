import React from 'react';
import Login from '../../Components/Login/Login';
import Signup from '../../Components/Signup/Signup';
const Home = () => {
    return (
            <div className='w-full h-[100vh]'>
                <div className='border-2 border-slate-800 bg-slate-800 text-white p-5 font-semibold text-xl'>
                    Welcome To Gym Management System
                </div>
                <div className='w-full bg-cover flex justify-center  h-[100%] bg-{url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'>
                 <div className='w-full lg:flex gap-32'>
                    <Login />
                    <Signup/>     
                </div>
                </div>
            </div>
    );
}
export default Home;