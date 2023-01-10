import React from 'react'
import Image from 'next/image'
import {RiDeleteBin6Line } from 'react-icons/ri';

const CartItem = ({dispatch, product, prodQty}) => {

  return (
    <ul className='px-5 text-center' key={product.id}>
    <li className='grid grid-cols-1 place-content-center my-5 gap-5'>
      <div className='flex justify-center'>
      <Image src={product.image} alt={product.name} className="object-cover w-52" />
      </div>
      <div className=''>
        <h4>{product.name}</h4>
        <p className='font-bold'>€ {product.price}</p>
        <label htmlFor="quantity"></label>
        <select className='border-2 border-black p-1'  id="quantity" onChange={(e) => dispatch({
            type: "CHANGE_CART_QTY",
            payload: {
                id: product.id,
                qty: e.target.value
            }
        })}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
      </div>
        <button
        onClick={() => dispatch({
          type: "REMOVE_FROM_CART",
          payload: product
        })}
         className='bg-red-700 py-1 px-3 rounded-sm shadow-black shadow-sm flex  items-center max-w-max mx-auto'>
          <RiDeleteBin6Line className='text-xl' />
        </button>
    </li>
  </ul> 
  )
}

export default CartItem;

