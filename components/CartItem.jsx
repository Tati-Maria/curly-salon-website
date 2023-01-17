import React from 'react'
import Image from 'next/image'
import {RiDeleteBin6Line } from 'react-icons/ri';

const CartItem = ({dispatch, product}) => {

  return (
    <ul key={product.id} className="shadow-md rounded-b-md">
    <li className='flex w-60 flex-col'>
      <Image src={product.image} alt={product.name} className="object-cover rounded-t-md" />
      <div className='p-2'>
        <div className='flex justify-between py-1'>
        <h4>{product.name}</h4>
        <p className='font-bold'>€ {product.price}</p>
        </div>
        <div className='flex items-center justify-between'>
        <label htmlFor="quantity" className=''>Qty 
        <select className='bg-yellow-400'  id="quantity" onChange={(e) => dispatch({
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
        </label>
        <button
        onClick={() => dispatch({
          type: "REMOVE_FROM_CART",
          payload: product
        })}
         className=''>
          <RiDeleteBin6Line className='text-xl' color='red' />
        </button>
        </div>
      </div>
        
    </li>
  </ul> 
  )
}

export default CartItem;