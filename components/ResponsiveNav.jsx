import Link from 'next/link'
import React from 'react'
import {AiOutlineClose} from "react-icons/ai"

const ResponsiveNav = ({closeNav}) => {
  return (
    <div className='block lg:hidden absolute z-20 right-0 top-0 h-screen w-2/5   bg-white text-black dark:text-white dark:bg-black'>
        <button className='cursor-pointer mt-5 w-full ml-3' onClick={closeNav}>
           <AiOutlineClose className='text-red-600 text-2xl text-right' />
        </button>
        <ul  className='space-y-10 flex flex-col items-center justify-center pt-24'>
        <li>
            <Link href={"/"}>
                HOME
            </Link>
        </li>
        <li>
            <Link href={"/about"}>
                ABOUT
            </Link>
        </li>
        <li>
            <Link href={"/portfolio"}>
                PORTFOLIO
            </Link>
        </li>
        <li>
            <Link href={"/products"}>
                PRODUCTS
            </Link>
        </li>
        <li>
            <Link href={"/contact"}>
                CONTACT
            </Link>
        </li>
    </ul>
    </div>
  )
}

export default ResponsiveNav