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
      <nav className='nav'>
        <div className='nav-container'>
        <Link href={"/"}>
        <span className='text-2xl tracking-widest'><span className='border-2 border-white px-2'>C</span>URLY</span>
        </Link>
        <DesktopNav />
        {open && <ResponsiveNav closeNav={handleNav} />}
        <div className="flex items-center gap-6">
        <Link href={'/cart'} className="flex items-center">
        <span className="bg-yellow-500 text-black p-1 rounded-full">{cart.length}</span>
          <AiOutlineShoppingCart size={25} />
        </Link>
        <div className='block lg:hidden'>
        <button className='' onClick={handleNav}>
          <AiOutlineMenu className='text-3xl' />
        </button>
        </div>
        </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;