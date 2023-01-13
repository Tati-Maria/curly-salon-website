import React from 'react'
import {BsEmojiFrown} from "react-icons/bs"

const Cancel = () => {
  return (
    <div className='min-h-screen text-black pt-32 flex items-center flex-col justify-center px-5'>
        <BsEmojiFrown size={150} className="mb-4 text-red-600"/>
        <h4 className='text-2xl font-bold pb-2'>Payment Not Processed</h4>
        <p className='text-xl text-center'>Your payment has not been processed due to cancellation.</p>
    </div>
  )
}

export default Cancel;