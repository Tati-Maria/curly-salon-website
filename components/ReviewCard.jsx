import React,{useState, useEffect} from 'react';
import {reviews} from "../data/reviews"
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";


const ReviewCard = () => {
    const [currentReview, setCurrentReview] = useState(0);

    //buttons disabled when reach last index
    const prevDisabled = currentReview === 0;
    const nextDisabled = currentReview === reviews.length - 1;


  return (
    <>
    <div className='relative pt-10'>
        <button disabled={prevDisabled} className='absolute bg-yellow-500/20 p-3 rounded-full left-[30%] -bottom-12 disabled:bg-transparent' onClick={() => setCurrentReview(currentReview - 1)}>
            <BsChevronCompactLeft size={30} />
        </button>
        <button disabled={nextDisabled} className='absolute bg-yellow-500/20 p-3 rounded-full right-[30%] -bottom-12 disabled:bg-transparent' onClick={() => setCurrentReview(currentReview + 1)}>
            <BsChevronCompactRight size={30} />
        </button>
        <div className='space-y-2 px-10 pb-10'>
            <span className='text-yellow-500'>{reviews[currentReview].rating}</span>
            <h3 className='font-bold text-lg capitalize'>{reviews[currentReview].title}</h3>
            <p className='text-gray-900'>{reviews[currentReview].desc}</p>
            <h4 className='text-gray-500 font-extrabold text-xl'>{reviews[currentReview].name}</h4>
        </div>

    </div>
    
    </>
  )
}

export default ReviewCard;

//<BsChevronCompactLeft size={30} />
//<BsChevronCompactRight size={30} />