import React from 'react';
import Image from 'next/image';
import john from "../images/jonantahkas.jpg";
import maya from "../images/MayaJacobs.jpg";
import samanth from "../images/smas.jpg";
import {
  AiOutlineFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin
} from "react-icons/ai"

const Staff = () => {
  return (
    <section className='min-h-[50vh] py-10 bg-white my-5'>
      <div className='max-w-[1000px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-10'>
        <div className='flex items-center flex-col gap-5'>
          <Image src={john}  alt="Johnatah staff member" className='shadow-xl shadow-slate-100' />
          <div className='flex flex-col items-center text-center space-y-2'>
            <h4 className='font-bold uppercase'>Johnatan Jackson</h4>
            <span className='uppercase text-xs'>Haircut Specialist</span>
            <div className='staff-icons'>
              <AiOutlineFacebook />
              <AiFillTwitterCircle />
              <AiFillInstagram />
              <AiFillLinkedin />
            </div>
          </div>
        </div>
        <div  className='flex items-center flex-col gap-5'>
        <Image src={maya}  alt="Maya staff member" className='shadow-xl shadow-slate-100' />
          <div className='flex flex-col items-center text-center space-y-2'>
            <h4 className='uppercase font-bold'>Maya Jacobs</h4>
            <span className='uppercase text-xs'>Coloring Artist</span>
            <div className='staff-icons'>
              <AiOutlineFacebook />
              <AiFillTwitterCircle />
              <AiFillInstagram />
              <AiFillLinkedin />
            </div>
          </div>
        </div>
        <div className='flex items-center flex-col gap-5'>
        <Image src={samanth}  alt="Samanth staff member" className='shadow-xl shadow-slate-100' />
          <div className='flex flex-col items-center text-center space-y-2'>
            <h4 className='uppercase font-bold'>Samanth Majkovsky</h4>
            <span className='uppercase text-xs'>Coloring Artist</span>
            <div className='staff-icons'>
              <AiOutlineFacebook />
              <AiFillTwitterCircle />
              <AiFillInstagram />
              <AiFillLinkedin />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Staff