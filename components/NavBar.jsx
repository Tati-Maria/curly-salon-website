import React from 'react'
import Link from 'next/link';
import {GiHairStrands} from "react-icons/gi"

const NavBar = () => {
  return (
    <nav className='py-4 sticky top-0 left-0 h-20 w-screen z-10 shadow-md font-roboto'>
      <div className='max-w-[1200px] mx-auto flex items-center justify-between'>
      <div className='flex items-center text-3xl'>
      <GiHairStrands className='text-pink-500' />
      <span className='font-dancingScript text-3xl'>
        <Link href={"/"}>Tainá</Link>
        </span>
      </div>
      <ul>
        <li className='bg-pink-500 text-white py-2 px-5 rounded-md hover:bg-white hover:text-pink-500 hover:border-pink-500 border'>
          <Link href={"/contact"} className="active:text-gray-600 tracking-wider">Agendamento</Link>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default NavBar