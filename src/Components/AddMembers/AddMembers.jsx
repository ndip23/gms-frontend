import React, {useState}from 'react';
import axios from 'axios';


const AddMembers = () => {

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
            const response = await axios.post('https://api.cloudinary.com/v1_1/dw76uqccg/image/upload', data);
            console.log(response.data);
            console.log("Image uploaded successfully!");
            const imageurl = response.data.url;
            setInputField({ ...inputField, ['profilePic']: imageurl }); // Set the profile picture URL
        } catch (err) {
            console.error("Error uploading image:", err);
        }
    };

     const [inputField, setInputField] = useState({name:"", number:"", Address:"", membership:"", profilePic:"", joiningDate:"",});
        const handleOnChange= (event,name)=>{ 
            setInputField({...inputField,[name]:event.target.value})
        }
        console.log(inputField)

    return (
        <div className='text-black'>
            <div className='grid gap-5 grid-cols-2 text-1g'>
                <input value={inputField.name} onChange={(event)=>{handleOnChange(event,"name")}} type="text" placeholder='Name of the Joinee' className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12' />
                <input value={inputField.number} onChange={(event)=>{handleOnChange(event,"number")}} type="text" placeholder='Mobile Number' className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12' />
                <input value={inputField.Address} onChange={(event)=>{handleOnChange(event,"Address")}} type="text" placeholder='Enter Address' className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12' />
                <input value={inputField.joiningDate} onChange={(event)=>{handleOnChange(event,"month")}} type="date" className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12' />
                <select value={inputField.membership} onChange={(event)=>{handleOnChange(event,"membership")}} className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12 placeholder:text-gray' >
                    <option> 1 Month Membership</option>
                    <option> 2 Month Membership</option>
                    <option> 3 Month Membership</option>
                </select>

                <input className='cursor-pointer' type='file' onChange={uploadImage}  />
                <div className='w-1/4'>
                {inputField.profilePic && (
                    <img src={inputField.profilePic}  className='w-full h-full rounded-full' />
                )}
                </div>
                <div className='p-3 border-2 w-28 text-1g h-14 text-center  bg-black text-white rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' >
                    Register</div>

            </div>
        </div>

    );
}
export default AddMembers;