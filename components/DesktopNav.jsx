import Link from 'next/link';
import React from 'react'

const DesktopNav = () => {
  return (
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
  )
}

export default DesktopNav;