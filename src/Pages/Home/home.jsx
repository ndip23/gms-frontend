import React from 'react';
import Login from '../../Components/Login/Login';
import Signup from '../../Components/Signup/Signup';
const Home = () => {
    return (
            <div className='w-full h-[100vh]'>
                <div className='border-2 border-slate-800 bg-slate-800 text-white p-5 font-semibold text-xl'>
                    Welcome To Gym Management System
                </div>
                <div className='w-full bg-cover flex justify-center  h-[100%] bg-{url("https://unsplash.com/photos/person-about-to-lift-the-barbel-WvDYdXDzkhs")'>
                 <div className='w-full lg:flex gap-32'>
                    <Login />
                    <Signup/>     
                </div>
                </div>
            </div>
    );
}
export default Home;