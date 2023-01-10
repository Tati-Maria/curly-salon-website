import { data } from 'autoprefixer';
import Link from 'next/link';
import React from 'react'
import {AiFillMail, 
  AiOutlineWhatsApp,  
  AiFillFacebook,
  AiFillInstagram} from "react-icons/ai"


const Footer = () => {
  return (
    <footer className='bg-black text-white pt-10'>
      <div className='max-w-[1200px] gap-10 mx-auto grid grid-cols-1 place-items-center lg:place-items-start lg:grid-cols-3 pb-4'>
        <section className='space-y-4'>
          <h4 className='font-bold text-lg text-center lg:text-start'><span className='border-2 p-1'>C</span>urly</h4>
          <p className='text-xs lg:text-sm text-center lg:text-start'>Transform your look with<br/> our top-quality styling services</p>
          <div className='flex items-center gap-4 justify-center lg:justify-start'>
            <AiFillMail />
            <AiFillFacebook />
            <AiFillInstagram />
            <AiOutlineWhatsApp />
          </div>
        </section>
        <section className='space-y-4'>
          <h4 className='font-bold text-lg text-center lg:text-start'>Contact</h4>
          <address className='text-sm font-light'>Avenida Brasileira 34, Lisboa 7354</address>
          <p className='flex flex-col text-center lg:text-start'>
            <span className='text-light text-xs lg:text-sm'>curlysalon@gmail.com</span>
            <span className='text-light text-xs lg:text-sm'>+351 234 898 6760</span>
          </p>
        </section>
        <section className='space-y-3'>
          <h4 className='font-bold text-lg text-center lg:text-start'>Info</h4>
          <p className='grid grid-cols-2 gap-10'>
            <span className='text-xs lg:text-sm'>Working Days</span>
            <span className='text-xs lg:text-sm text-end'>9am - 8pm</span>
          </p>
          <p className='grid grid-cols-2 gap-10'>
            <span className='text-xs lg:text-sm'>Saturday</span>
            <span className='text-xs lg:text-sm text-end'>10am - 7pm</span>
          </p>
          <p className='grid grid-cols-2 gap-10'>
            <span className='text-xs lg:text-sm'>Sunday</span>
            <span className='text-xs lg:text-sm text-end'>Closed</span>
          </p>
          <p className='grid grid-cols-2 gap-10'>
            <span className='text-xs lg:text-sm'>Holidays</span>
            <span className='text-xs lg:text-sm text-end'>Closed</span>
          </p>
        </section>
      </div>
      <div className='border-t pt-4'>
      <p className='text-center text-gray-300 italic text-xs'>
      Credits images from 
      <Link className='underline' href="https://www.pexels.com/pt-br/@pixabay/"> Pexels and </Link><Link className='underline' href="https://unsplash.com/s/photos/hair-salon">
          Unsplash
        </Link>
      </p>
      <p className='text-center text-gray-300 text-xs md:text-sm lg:text-base'>Created By &copy; Maria {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer;