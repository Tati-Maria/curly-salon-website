import Link from 'next/link';
import React from 'react'
import {AiFillMail, 
  AiOutlineWhatsApp,  
  AiFillFacebook,
  AiFillInstagram} from "react-icons/ai"
import {GoLocation} from "react-icons/go"

const Footer = () => {
  return (
    <footer className='bg-[#5f3822] py-5 text-white font-roboto'>
      <div className='max-w-[1200px] mx-auto flex justify-around'>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold'>Horário</h3>
          <ul className='text-sm space-y-2 text-gray-200'>
            <li>
              <p  className=''>Sem atentimentos aos feriados</p>
            </li>
            <li>
              <p>Segunda à Quinta: <time>09h - 18h</time></p>
            </li>
            <li>
              <p>Sábados: <time>10h - 18h</time></p>
            </li>
            <li>
              <p>Para ocasiões especias: sob consulta</p>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold'>Contacto</h3>
          <ul className='text-sm space-y-2 text-gray-200'>
            <li className='flex items-center gap-2'>
              <AiFillFacebook  className='text-base text-blue-400'/>
              <Link href="facebook.com">Tainá Silva</Link>
            </li>
            <li className='flex items-center gap-2'>
              <AiFillMail className='text-base text-red-500' />
              <p>taina12@gmail.com</p>
            </li>
            <li className='flex items-center gap-2'>
              <AiOutlineWhatsApp className='text-base text-green-400'/>
              <p>+351 934 676 699</p>
            </li>
            <li className='flex items-center gap-2'>
              <AiFillInstagram className='text-base text-fuchsia-500' />
              <p>taina_trancista2</p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-semibold'>Localização</h3>
          <div className='text-sm space-y-2 text-gray-200 flex items-center gap-2'>
            <GoLocation />
            <address>Rua 24 Avenida Brasil, Lisboa 3456</address>
          </div>
          <div className='mt-10'>
            <p className='text-xs text-gray-300'>Tainá &copy; Todos os direitos reservados {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;