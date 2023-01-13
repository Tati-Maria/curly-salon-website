import React,{useState} from 'react'
import Title from '../components/Title';
import {
  SlSocialFacebook, 
  SlSocialInstagram
} from "react-icons/sl"
import {FiMail} from "react-icons/fi"
import {FaMobileAlt} from "react-icons/fa"
import Link from 'next/link';

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(emailRegExp.test(email)) {
      setSubmitting(true);
      setTimeout(() => (setSubmitting(false)), 2000)
    } else {
      setSubmitting(false)
    }

    e.target.reset();
    setEmail("")
  }


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
            <form onSubmit={handleSubmit}>
              <legend className='font-bold text-lg'>Send Message</legend>
              <p className='py-4'>For appointments click 
              <Link className='text-blue-400 underline' target="_blank" href="https://calendly.com/quinajuy/hair-appointment"> HERE</Link>
              </p>
              <div className='input-container'>
                <input className='input-box' type="text" placeholder='Your name' required />
                <input className='input-box' type="email" placeholder='Email address' value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
              <div className='input-container'>
                <input className='input-box' type="tel" placeholder='Phone number' />
                <input className='input-box' type="text" placeholder='Subject' />
              </div>
              <div className='my-4'>
                <textarea className='w-full resize-none input-box h-28'  placeholder='Message' required />
              </div>
              {submitting ? (<button disabled className=' success-btn disabled:opacity-75'>Sent</button>) : (<button className='cart-btn'>Send</button>)}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;