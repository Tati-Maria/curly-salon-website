import Image from "next/image";
import {GoPrimitiveDot} from "react-icons/go";
import Link from 'next/link';
import {AiOutlineArrowDown} from "react-icons/ai"
import hero from "../images/hero-1.jpg";
import heroMobile from "../images/1.png"

const Header = () => {
  return (
    <header className='font-poppins h-screen relative'>
      <Image src={hero} alt="woman" className="absolute inset-0 h-full bg-cover bg-center w-full z-0 hidden sm:block" />
      <Image src={heroMobile} alt="woman" className="block absolute inset-0 bg-cover h-full  sm:hidden" />
      <div className="absolute inset-0 h-full bg-black/40 z-10"></div>
    <section className='text-white max-w-[1200px] mx-auto h-full flex items-center justify-center pt-16 relative z-20'>
        <div className='flex flex-col items-center justify-center space-y-5'>
          <span className='text-5xl lg:text-7xl text-yellow-400 font-dancingScript'>get noticed</span>
          <h1 className='flex item-center font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[120px] tracking-[20px] uppercase gap-0 lg:gap-5'>
            <GoPrimitiveDot className='text-2xl hidden lg:block' />
            Fashion
            <GoPrimitiveDot className='text-2xl hidden lg:block' />
          </h1>
          <span className='text-semibold tracking-wider pb-10'>Lisbon - since 1999</span>
        <Link href="#hero" className='lg:mt-20 bg-yellow-400 text-black p-2 rounded-full animate-bounce duration-300'>
        <AiOutlineArrowDown className='text-3xl' />
        </Link>
        </div>
      </section>
    </header>
  )
}

export default Header