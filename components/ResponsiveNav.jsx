import Link from 'next/link'
import React from 'react'
import {AiOutlineClose} from "react-icons/ai"

const ResponsiveNav = ({closeNav}) => {
  return (
    <div className='overlay duration-300' onClick={closeNav}>
        <div className='nav-responsive-container'>
        <button className='cursor-pointer mt-5 w-full ml-3' onClick={closeNav}>
           <AiOutlineClose className='text-red-600 text-2xl text-right' />
        </button>
        <ul className='nav-responsive-ul'>
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
            <Link href={"/services"}>
                SERVICES
            </Link>
        </li>
        <li>
            <Link href={"/contact"}>
                CONTACT
            </Link>
        </li>
    </ul>
    </div>
    </div>
  )
}

export default ResponsiveNav;