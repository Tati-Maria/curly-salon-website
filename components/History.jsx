import React from 'react';


const History = () => {
  return (
    <section className='bg-gray-800 text-white py-10'>
      <div className='max-w-[1000px] mx-auto flex flex-col items-center justify-center gap-24 lg:flex-row'>
        <div className='relative text-center space-y-2'>
          <span className='absolute inset-0 text-yellow-200 opacity-30 -z-0 font-dancingScript text-5xl'>Styles</span>
          <h3 className='font-bold text-5xl'>125</h3>
          <p className='font-semibold text-sm'>Lorem, ipsum dolor.</p>
        </div>
        <div className='relative text-center space-y-2'>
        <span className='absolute inset-0 text-yellow-200 opacity-30 -z-0 font-dancingScript text-5xl'>Clients</span>
          <h3 className='font-bold text-5xl'>300</h3>
          <p className='font-semibold text-sm'>Lorem, ipsum dolor.</p>
        </div>
        <div className='relative text-center space-y-2'>
        <span className='absolute inset-0 text-yellow-200 opacity-30 -z-0 font-dancingScript text-5xl'>Awards</span>
          <h3 className='font-bold text-5xl'>35</h3>
          <p className='font-semibold text-sm'>Lorem, ipsum dolor.</p>
        </div>
        <div className='relative text-center space-y-2'>
        <span className='absolute inset-0 text-yellow-200 opacity-30 -z-0 font-dancingScript text-5xl'>Honours</span>
          <h3 className='font-bold text-5xl'>145</h3>
          <p className='font-semibold text-sm'>Lorem, ipsum dolor.</p>
        </div>
      </div>

    </section>
  )
}

export default History;