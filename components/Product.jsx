import React from 'react';
import Image from 'next/image';
import { BsCartPlusFill, BsCartXFill} from "react-icons/bs";
import { CartState } from '../context/Context';
import {motion} from "framer-motion"

const Product = ({product}) => {
    const {state: { cart }, dispatch} = CartState()


  return (
        <li className='w-10/12 space-y-3 mt-10'>
        <div className=''>
        <Image src={product.image} alt={product.name} priority="high" className="rounded-sm object-cover shadow" />
        </div>
        <div className="flex  items-center justify-between">
            <h4 className="text-base lg:text-lg">{product.name}</h4>
            <p className="font-bold">€ {product.price}</p>
        </div>
        {
        cart.some(p => p.id === product.id) ? 
        (<button onClick={() => dispatch({
            type: "REMOVE_FROM_CART", payload: product
        })} className="red-btn">
        <span>Remove</span>
        <BsCartXFill size={20} />
        </button>) : 
        (<button onClick={() => dispatch({
            type: "ADD_TO_CART", payload: product
        })} className="cart-btn">
        <span>Add to Cart</span>
        <BsCartPlusFill />
    </button>)
        }
    </li>
  )
}

export default Product;