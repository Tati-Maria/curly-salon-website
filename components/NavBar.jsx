import React, { useState } from 'react'
import Link from 'next/link';
import {
  AiOutlineShoppingCart,
   AiOutlineMenu,
} from "react-icons/ai";
import DesktopNav from './DesktopNav';
import ResponsiveNav from './ResponsiveNav';

const NavBar = () => {
  const [open , setOpen] = useState(false);

  function handleNav() {
    setOpen(!open);
  }

  return (
    <>
      <nav className='fixed inset-0 bg-black  h-[10vh] shadow z-20 font-poppins'>
        <div className='max-w-[1200px] mx-auto text-white py-4  px-7 lg:px-0 flex items-center justify-between relative'>
        <span className='text-2xl tracking-widest'><span className='border-2 border-white px-2'>C</span>URLY</span>
        <DesktopNav />
        {open && <ResponsiveNav closeNav={handleNav} />}
        <button className="flex-grow lg:flex-grow-0">
          <Link href={"/cart"} className="flex justify-end relative pr-5">
          <AiOutlineShoppingCart className="text-3xl" />
          <span className='text-lg'>0</span>
          </Link>
        </button>
        <button className='block lg:hidden' onClick={handleNav}>
          <AiOutlineMenu className='text-3xl' />
        </button>
        </div>
      </nav>
    </>
  )
}

export default NavBar