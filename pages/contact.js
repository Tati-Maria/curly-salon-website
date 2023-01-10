import React from 'react'
import Title from '../components/Title';
import {
  SlSocialFacebook, 
  SlSocialInstagram,} from "react-icons/sl"
  import {FiMail} from "react-icons/fi"
  import {FaMobileAlt} from "react-icons/fa"
import Link from 'next/link';

const Contact = () => {
  return (
    <section className='min-h-screen w-full py-20'>
      <Title title="Get in touch with us!" subtitle="Contact" />
      <div className='max-w-7xl mx-auto px-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='flex flex-col justify-center gap-3'>
          <div className='contact-box'>
            <div className='p-6 bg-yellow-500 rounded-full'>
            <FaMobileAlt className='text-black text-lg' />
            </div>
            <div className='flex flex-col space-y-1'>
              <span className='font-bold'>Phone Number</span>
              <span className='font-thin'>+351 234 898 6760</span>
            </div>
          </div>
          <div className='contact-box'>
            <div className='p-6 bg-yellow-500 rounded-full'>
            <FiMail className='text-black text-lg' />
            </div>
            <div className='flex flex-col space-y-1'>
              <span className='font-bold'>Email Address</span>
              <span className='font-thin'>curlysalon@gmail.com</span>
            </div>
          </div>
          <div className='contact-box'>
            <div className='p-6 bg-yellow-500 rounded-full'>
            <SlSocialInstagram className='text-black text-lg' />
            </div>
            <div className='flex flex-col space-y-1'>
              <span className='font-bold'>Instagram</span>
              <span className='font-thin'>curly_salon</span>
            </div>
          </div>
          <div className='contact-box'>
            <div className='p-6 bg-yellow-500 rounded-full'>
            <SlSocialFacebook className='text-black text-lg' />
            </div>
            <div className='flex flex-col space-y-1'>
              <span className='font-bold'>Facebook</span>
              <span className='font-thin text-sm lg:text-base'>Curly Hair Salon</span>
            </div>
          </div>
          </div>
          <div className='py-10 shadow px-5 rounded-md'>
            <form>
              <legend className='font-bold text-lg'>Send Message</legend>
              <p className='py-4'>For appointments click 
              <Link className='text-blue-400 underline' target="_blank" href="https://calendly.com/quinajuy/hair-appointment"> HERE</Link>
              </p>
              <div className='input-container'>
                <input className='input-box' type="text" placeholder='Your name' required />
                <input className='input-box' type="email" placeholder='Email address' required />
              </div>
              <div className='input-container'>
                <input className='input-box' type="tel" placeholder='Phone number' />
                <input className='input-box' type="text" placeholder='Subject' />
              </div>
              <div className='my-4'>
                <textarea className='w-full resize-none input-box h-28'  placeholder='Message' required />
              </div>
              <button className='cart-btn'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;