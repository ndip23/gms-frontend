import React, { useState } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

const AddMembers = () => {
    const [inputField, setInputField] = useState({
        name: "",
        number: "",
        address: "",
        membership: "",
        profilePic: "",
        joiningDate: "",
    });

    const [loading, setLoading] = useState(false); // State to manage loading status

    const uploadImage = async (e) => {
        console.log("Uploading image...");
        const file = e.target.files[0];
        if (!file) {
            return;
        }

        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'gym-management-system');

        try {
            setLoading(true); // Start loading
            const response = await axios.post('https://api.cloudinary.com/v1_1/dw76uqccg/image/upload', data);
            console.log("Image uploaded successfully!", response.data);
            const imageUrl = response.data.url;
            setInputField(prev => ({ ...prev, profilePic: imageUrl })); // Set the profile picture URL
        } catch (err) {
            console.error("Error uploading image:", err);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    const handleOnChange = (event, name) => {
        setInputField({ ...inputField, [name]: event.target.value });
    };

    const handleRegister = async () => {
        console.log("Registering member:", inputField);
        // Implement registration logic here
        // Example: Send inputField to your backend API for registration
    };

    return (
        <div className='text-black'>
            <div className='grid gap-5 grid-cols-2 text-lg'>
                <input
                    value={inputField.name}
                    onChange={(event) => handleOnChange(event, "name")}
                    type="text"
                    placeholder='Name of the Joinee'
                    className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12'
                />
                <input
                    value={inputField.number}
                    onChange={(event) => handleOnChange(event, "number")}
                    type="text"
                    placeholder='Mobile Number'
                    className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12'
                />
                <input
                    value={inputField.address}
                    onChange={(event) => handleOnChange(event, "address")}
                    type="text"
                    placeholder='Enter Address'
                    className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12'
                />
                <input
                    value={inputField.joiningDate}
                    onChange={(event) => handleOnChange(event, "joiningDate")}
                    type="date"
                    className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12'
                />
                <select
                    value={inputField.membership}
                    onChange={(event) => handleOnChange(event, "membership")}
                    className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12'>
                    <option value="">Select Membership</option>
                    <option value="1 Month Membership">1 Month Membership</option>
                    <option value="2 Month Membership">2 Month Membership</option>
                    <option value="3 Month Membership">3 Month Membership</option>
                </select>

                <input
                    className='cursor-pointer'
                    type='file'
                    onChange={uploadImage}
                />
                
                {loading && (
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <LinearProgress color="secondary" />
                    </Stack>
                )}
                
                <div className='w-[100px] h-[100px]'>
                    {inputField.profilePic && (
                        <img src={inputField.profilePic} className='w-full h-full rounded-full' alt="Profile" />
                    )}
                </div>
                <div
                    className='p-3 border-2 w-28 text-lg h-14 text-center bg-black text-white rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
                    onClick={handleRegister}
                >
                    Register
                </div>
            </div>
        </div>
    );
}

export default AddMembers;