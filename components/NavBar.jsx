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
      <nav className='nav'>
        <div className='nav-container'>
        <Link href={"/"}>
        <span className='text-2xl tracking-widest'><span className='border-2 border-white px-2'>C</span>URLY</span>
        </Link>
        <DesktopNav />
        {open && <ResponsiveNav closeNav={handleNav} />}
        <div className='block lg:hidden'>
        <button className='' onClick={handleNav}>
          <AiOutlineMenu className='text-3xl' />
        </button>
        </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;