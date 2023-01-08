import React from 'react';
import {GoPrimitiveDot} from "react-icons/go";
import Link from 'next/link';
import {AiOutlineArrowDown} from "react-icons/ai"

const Header = () => {
  return (
    <header className='font-poppins bg'>
    <section className='text-white max-w-[1200px] mx-auto h-full flex items-center justify-center pt-16'>
        <div className='flex flex-col items-center justify-center space-y-5'>
          <span className='text-5xl lg:text-7xl text-yellow-400 font-dancingScript'>get noticed</span>
          <h1 className='flex items-center font-extrabold text-7xl lg:text-[120px] tracking-[20px] uppercase gap-5'>
            <GoPrimitiveDot className='text-2xl hidden lg:block' />
            Fashion
            <GoPrimitiveDot className='text-2xl hidden lg:block' />
          </h1>
          <span className='text-semibold tracking-wider pb-10'>Lisbon - since 1999</span>
        <Link href="#hero" className='lg:mt-20 bg-yellow-400 text-black p-2 rounded-full animate-bounce duration-300'>
        <AiOutlineArrowDown className='text-3xl' />
        </Link>
        </div>
      </section>
    </header>
  )
}

export default Header