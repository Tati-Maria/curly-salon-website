import { useState } from 'react';
import Image from 'next/image';
import Title from '../components/Title';
import Container from '../layout/Container';
import hair from "../images/hair-brush.png";
import nails from "../images/nail-polish.png";
import makeup from "../images/makeup (1).png";
import ImageSlider from '../components/ImageSlider';
import Link from 'next/link';

const Services = () => {

  return (
    <section className='w-full text-black py-20 dark:text-white px-6'>
        <Title title="Services" subtitle="Our Work" />
        <Container>
           <p className='text-center lg:w-[60ch] mx-auto pb-7'>
            Our Team of experienced stylists are dedicaded to making sure you leave our salon
            feeling refreshed and confident. Take a look at our services below and book an appointment today.
           </p>
           <div className='service-cards'>

            <div className='service-card'>
                <div className='p-6 bg-yellow-50 rounded-full'>
                <Image src={hair} alt="hair brush" title='makeup icons'/>
                </div>
                <div className='text-center space-y-1'>
                    <h4 className='font-bold text-xl'>Haircut & styling</h4>
                    <p className='font-thin'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, eius!</p>
                </div>
            </div>

            <div className='service-card'>
            <div className='p-6 bg-yellow-50 rounded-full'>
                <Image src={makeup} alt="makeup" title='haircut icons' />
            </div>
            <div className='text-center space-y-1'>
                <h4 className='font-bold text-xl'>Makeup</h4>
                <p className='font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sit?</p>
            </div>
            </div>

            <div className='service-card'>
            <div className='p-6 bg-yellow-50 rounded-full'>
                <Image src={nails} alt="nails" title='nails icons'/>
            </div>
            <div className='text-center space-y-1'>
                <h4 className='font-bold text-xl'>Manicure & Pedicure</h4>
                <p className='font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sit?</p>
            </div>
            </div>
           </div>
            <button className='cart-btn mx-auto mt-20 mb-10 extra'>
                <Link target="_blank" href="https://calendly.com/quinajuy/hair-appointment">Book an appointment</Link>
            </button>
           <div>
            <Title title="See our work" subtitle="Portfolio" />
           <ImageSlider />
           </div>
        </Container>
    </section>
  )
}

export default Services;

//<a href="https://www.flaticon.com/free-icons/makeup" title="makeup icons">Makeup icons created by Victoruler - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/haircut" title="haircut icons">Haircut icons created by Pop Vectors - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/nails" title="nails icons">Nails icons created by Freepik - Flaticon</a>