import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 pt-7 pb-10 px-10 lg:px-0'>
        {children}
    </div>
  )
}

export default Container;