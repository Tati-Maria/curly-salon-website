import React from 'react'
import Link from 'next/link';
import {
  AiOutlineShoppingCart,
   AiOutlineMenu,
} from "react-icons/ai";
import { useContext } from 'react';
import { ShoppingCartContext } from '../context/CartContext';


const NavBar = () => {
  return (
    <>
      <nav className='fixed inset-0 bg-white  h-[10vh] shadow z-20 font-poppins'>
        <div className='max-w-[1200px] mx-auto text-black py-4  px-7 lg:px-0 flex items-center justify-between'>
        <span className='text-2xl tracking-widest'><span className='border-2 border-black px-2'>C</span>URLY</span>
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
            <Link href={"/products"}>PRODUCTS</Link>
            </li>
            <li>
            <Link href={"/contact"}>CONTACT</Link>
            </li>
        </ul>
        <button className="flex-grow lg:flex-grow-0">
          <Link href={"/cart"} className="flex justify-end relative pr-5">
          <AiOutlineShoppingCart className="text-3xl" />
          <span className='text-lg'>0</span>
          </Link>
        </button>
        <button className='block lg:hidden'>
          <AiOutlineMenu className='text-3xl' />
        </button>
        </div>
      </nav>
    </>
  )
}

export default NavBar