import React from 'react'
import Image from 'next/image'
import {RiDeleteBin6Line } from 'react-icons/ri';

const CartItem = ({dispatch, product, prodQty}) => {

  return (
    <ul className='prod-container' key={product.id}>
    <li className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
      <Image src={product.image} alt={product.name} />
      <div>
        <h4>{product.name}</h4>
        <p>€ {product.price}</p>
        <label htmlFor="quantity"></label>
        <select  id="quantity" onChange={(e) => dispatch({
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
         className='bg-red-700 py-1 px-3 rounded-sm shadow-black shadow-sm flex  items-center max-w-max'>
          <RiDeleteBin6Line className='text-xl' />
        </button>
    </li>
  </ul> 
  )
}

export default CartItem;

