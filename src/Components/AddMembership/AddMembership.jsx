import React, {useState}from 'react';


const AddMembership = () => {

    const [inputField, setInputField] = useState({month:"", price:""});
    const handleOnChange= (event,name)=>{
        setInputField({...inputField,[name]:event.target.value})
    }
    console.log(inputField)

    return (
            <div className='text-black'>
                <div className='flex flex-wrap gap-5 items-center justify-center'>
                    {/* block for Membership */}
                    <div className='rounded-xl cursor-pointer font-semibold justify-between pt-1 pb-1 text-1g bg-black text-white border-2 pl-2 pr-2 flex-col gap-3 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
                        <div>1 Month Membership</div>
                        <div>7000FCFA</div>
                    </div>
                     {/* block for Membership */}
                     <div className='rounded-xl cursor-pointer font-semibold justify-between pt-1 pb-1 text-1g bg-black text-white border-2 pl-2 pr-2 flex-col gap-3 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
                        <div>2 Month Membership</div>
                        <div>13000FCFA</div>
                    </div>
                     {/* block for Membership */}
                     <div className='rounded-xl cursor-pointer font-semibold justify-between pt-1 pb-1 text-1g bg-black text-white border-2 pl-2 pr-2 flex-col gap-3 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
                        <div>3 Month Membership</div>
                        <div>19000FCFA</div>
                    </div>
                </div>
                <hr className='mt-10 mb-10'/>
                <div className='flex gap-10 mb-10'>
                    <input  value={inputField.month} onChange={(event)=>{handleOnChange(event,"month")}} className='border-2 rounded-1g text-1g w-1/3 h-1/2 p-2' type="number" placeholder='Add No of Months' />
                    <input  value={inputField.price} onChange={(event)=>{handleOnChange(event,"price")}} className='border-2 rounded-1g text-1g w-1/3 h-1/2 p-2' type="number" placeholder='Add Price' />
                    <div className='bg-black text-1g w-auto mt-0 text-white p-2 rounded-xl border-2 cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Add +</div>
                </div>
            </div>
    );
}
export default AddMembership;