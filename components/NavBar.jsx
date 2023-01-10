import React, { useState } from 'react'
import Link from 'next/link';
import {
  AiOutlineShoppingCart,
   AiOutlineMenu,
} from "react-icons/ai";
import DesktopNav from './DesktopNav';
import ResponsiveNav from './ResponsiveNav';
import { CartState } from '../context/Context';

const NavBar = () => {
  const [open , setOpen] = useState(false);
  const {state: {cart}} = CartState();

  function handleNav() {
    setOpen(!open);
  }

  return (
    <>
      <nav className='fixed inset-0 bg-black  max-h-[10vh] shadow z-20 font-poppins'>
        <div className='max-w-[1200px] mx-auto text-white pt-7  px-7 lg:px-0 flex items-center justify-between relative'>
        <Link href={"/"}>
        <span className='text-2xl tracking-widest'><span className='border-2 border-white px-2'>C</span>URLY</span>
        </Link>
        <DesktopNav />
        {open && <ResponsiveNav closeNav={handleNav} />}
        <button className="flex-grow lg:flex-grow-0">
          <Link href={"/cart"} className="flex justify-end relative pr-5">
          <AiOutlineShoppingCart className="text-3xl" />
          <span className='text-lg bg-yellow-400 px-2 rounded-full text-black'>{cart.length}</span>
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