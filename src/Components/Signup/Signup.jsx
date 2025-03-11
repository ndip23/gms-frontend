import React, { useState } from 'react';
import './Signup.css';
import Modal from '../Modal/Modal';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

const Signup = () => {
    const [forgotPassword, setForgotPassword] = useState(false);
    const [inputField, setInputField] = useState({
        gymName: "",
        email: "",
        userName: "",
        password: "",
        conPassword: "",
        profilePic: ""
    });
    const [loading, setLoading] = useState(false); // State to manage loading status

    const handleClose = () => {
        setForgotPassword(prev => !prev);
    };

    const handleOnChange = (event, name) => {
        setInputField({ ...inputField, [name]: event.target.value });
    };

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

    const handleRegister = async () => {
        // Implement registration logic here
        if (inputField.password !== inputField.conPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            // Make registration request (replace with your API endpoint)
            const response = await axios.post('/api/register', {
                gymName: inputField.gymName,
                email: inputField.email,
                userName: inputField.userName,
                password: inputField.password,
                profilePic: inputField.profilePic,
            });
            console.log("Registration successful!", response.data);
        } catch (err) {
            console.error("Error during registration:", err);
        }
    };

    return (
        <div className='customSignup w-1/3 p-10 ml-10 bg-gray-50 bg-opacity-50 h-[450px] overflow-y-auto'>
            <div className='font-sans text-white text-center text-3xl'>Register your gym</div>
            <input
                type='email'
                value={inputField.email}
                onChange={(event) => { handleOnChange(event, "email"); }}
                placeholder='Enter Email'
                className='w-full p-2 my-10 border-2 rounded-lg'
            />
            <input
                type='text'
                value={inputField.gymName}
                onChange={(event) => { handleOnChange(event, "gymName"); }}
                placeholder='Enter Gym name'
                className='w-full p-2 mb-10 border-2 rounded-lg'
            />
            <input
                type='text'
                value={inputField.userName}
                onChange={(event) => { handleOnChange(event, "userName"); }}
                placeholder='Enter Username'
                className='w-full p-2 mb-10 border-2 rounded-lg'
            />
            <input
                type='password'
                value={inputField.password}
                onChange={(event) => { handleOnChange(event, "password"); }}
                placeholder='Enter Password'
                className='w-full p-2 mb-10 border-2 rounded-lg'
            />
            <input
                type='password'
                value={inputField.conPassword}
                onChange={(event) => { handleOnChange(event, "conPassword"); }}
                placeholder='Confirm Password'
                className='w-full p-2 mb-10 border-2 rounded-lg'
            />

            <input
                type='file'
                accept="image/*"
                onChange={uploadImage}
                className='w-full p-2 mb-10 border-2 rounded-lg'
            />
            {loading && (
                <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                    <LinearProgress color="secondary" />
                </Stack>
            )}

            {inputField.profilePic && (
                <img
                    src={inputField.profilePic}
                    alt="Profile Preview"
                    className='mb-10 h-[200px] w-[250px] object-cover'
                />
            )}
            <div
                className='p-2 w-[80%] border-2 bg-slate-800 mx-auto rounded-lg text-white text-center text-lg hover:bg-white hover:text-black font-semibold cursor-pointer'
                onClick={handleRegister}
            >
                Register
            </div>
            <div
                className='p-2 w-[80%] border-2 bg-slate-800 mx-auto rounded-lg mt-5 text-white text-center text-lg hover:bg-white hover:text-black font-semibold cursor-pointer'
                onClick={handleClose}
            >
                Forgot password
            </div>
            {forgotPassword && <Modal header="Forgot Password" handleClose={handleClose} content={<ForgotPassword />} />}
        </div>
    );
}

export default Signup;