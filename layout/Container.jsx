import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 pt-7 pb-10 px-4 lg:px-0'>
        {children}
    </div>
  )
}

export default Container;