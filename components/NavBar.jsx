import React from 'react'
import Link from 'next/link';
import {GoPrimitiveDot} from "react-icons/go";
import {
  AiOutlineShoppingCart,
  AiOutlineArrowDown,
   AiOutlineMenu,
  AiOutlineClose,} from "react-icons/ai"

const NavBar = () => {
  return (
    <header className='bg font-roboto'>
      <nav className='max-w-[1200px] mx-auto text-white py-4 flex items-center justify-between h-[10vh]'>
        <span className='text-2xl tracking-widest'><span className='border-2 border-white px-2'>C</span>URLY</span>
        <ul className='items-center space-x-10 hidden lg:flex'>
          <li>
            <Link href={"/"}>HOME</Link>
          </li>
            <li>
            <Link href={"/about"}>ABOUT</Link>
            </li>
            <li>
            <Link href={"/portfolio"}>PORTFOLIO</Link>
            </li>
            <li>
            <Link href={"/products"}>PORTFOLIO</Link>
            </li>
            <li>
            <Link href={"/contact"}>CONTACT</Link>
            </li>
        </ul>
        <button className="relative">
          <Link href={"/cart"} className="flex items-center">
          <AiOutlineShoppingCart className="text-3xl" />
          <span className=" absolute -top-4 left-4 bg-yellow-500 py-1 px-2 rounded-full">0</span>
          </Link>
        </button>
      </nav>
      <section className='text-white max-w-[1200px] mx-auto h-[90vh] flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <span className='text-7xl text-yellow-400 font-dancingScript'>get noticed</span>
          <h1 className='flex items-center font-bold text-[120px] tracking-[20px] uppercase gap-5'>
            <GoPrimitiveDot className='text-2xl' />
            Fashion
            <GoPrimitiveDot className='text-2xl' />
          </h1>
          <span className='text-semibold tracking-wider'>Lisbon - since 1999</span>
        </div>
      </section>
      <span className="text-white">
        <AiOutlineArrowDown />
      </span>
    </header>
  )
}

export default NavBar