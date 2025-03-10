import React, { useState, useEffect } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [greeting, setGreeting] = useState("");
    const location = useLocation(); // Get the current location
    const navigate=useNavigate();

    const greetingMessage = () => {
        const current = new Date();
        const hours = current.getHours();
    
        if (hours < 12) {
            setGreeting("Good Morning!");
        } else if (hours < 18) {
            setGreeting("Good Afternoon!");
        } else {
            setGreeting("Good Evening!");
        }
    };

    // Call the greetingMessage function when the component mounts
    useEffect(() => {
        greetingMessage();
    }, []);
   const handleLogout= async ()=>{

    sessionStorage.clear();
    navigate('/')
   }

    return (
        <div className='w-1/4 h-[100vh] border-2 bg-black text-white p-5 font-extralight'>
            <div className='text-center text-3xl mb-5'>
                Power Zone
            </div>
            <div className='flex gap-5 my-5'>
                <div className='w-[100px] h-[100px] rounded-full overflow-hidden'>
                    <img 
                        alt='gym pic' 
                        className='w-full h-full object-cover' 
                        src='https://www.primalstrength.com/cdn/shop/files/gymdesign_render_Two_collumn_grid_cb1b5850-fa8e-4a7b-a2b3-190c2e45facd.jpg?v=1680719688&width=1500' 
                    />
                </div>
                <div>
                    <div className='text-2xl'>{greeting}</div>
                    <div className='text-xl font-semibold mt-1'>Admin</div>
                </div>
            </div>
            <div className='mt-10 py-10 border-t-2 border-gray-700'>
                <Link 
                    to='/dashboard' 
                    className={`flex items-center gap-8 font-semibold text-2xl p-3 rounded-xl cursor-pointer mb-5 hover:text-black hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ${location.pathname === "/dashboard" ? ' border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-slate-800 text-white'}`}
                >
                    <div><HomeIcon /></div>
                    <div>Dashboard</div>
                </Link>
                <Link 
                    to='/member' 
                    className={`flex items-center gap-8 font-semibold text-2xl p-3 rounded-xl cursor-pointer mb-5 hover:text-black hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ${location.pathname === "/member" ? ' border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-slate-800 text-white'}`}
                >
                    <div><GroupsIcon /></div>
                    <div>Members</div>
                </Link>
                <div onClick={()=>{handleLogout()}} className='flex mt-5 items-center gap-8 font-semibold text-2xl bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black'>
                    <div><LogoutIcon /></div>
                    <div>Logout</div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;