import React from 'react';
import {AiOutlineCheckCircle} from "react-icons/ai"

const Sucess = () => {
  return (
    <div className='min-h-screen text-black pt-32 flex items-center flex-col justify-center'>
        <AiOutlineCheckCircle size={150} className="text-center text-green-400" />
        <p className='font-bold text-3xl pt-3 pb-2'>Thank you!</p>
        <p className='text-xl'>Your order was placed Sucessfully.</p>
        <span className='text-xl'>Yay!</span>
    </div>
  )
}

export default Sucess;