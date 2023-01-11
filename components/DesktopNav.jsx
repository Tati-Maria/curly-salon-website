import Link from 'next/link';
import React from 'react'

const DesktopNav = () => {
  return (
    <ul className='nav-ul'>
          <li>
            <Link href={"/"}>HOME</Link>
          </li>
            <li>
            <Link href={"/about"}>ABOUT</Link>
            </li>
            <li>
            <Link href={"/services"}>SERVICES</Link>
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