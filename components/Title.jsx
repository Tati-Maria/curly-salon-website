import React from 'react'

const Title = ({title, subtitle}) => {
  return (
    <div>
        <div className='relative'>
            <span className='absolute inset-0 font-dancingScript text-gray-700 block text-center text-7xl opacity-10'>
               {subtitle}
            </span>
        <h2 className='font-extrabold text-4xl font-poppins text-center py-10 relative z-10 lg:text-5xl'>
            {title}
        </h2>
        </div>
    </div>
  )
}

export default Title