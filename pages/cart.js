import React, {useState, useEffect} from 'react'
import Title from "../components/Title"
import Link from 'next/link';
import { CartState } from '../context/Context';
import CartItem from '../components/CartItem';
import {toast} from "react-toastify";


const Cart = () => {
  const {state: {cart}, dispatch} = CartState();
  const [total, setTotal] = useState();

  //calculate the total price
  useEffect(() => {
    setTotal(cart.reduce((prev, curr) => prev + Number(curr.price)*curr.qty, 0).toFixed(2))
  }, [cart]);

  const checkout = () => {
    toast.info("This functionality is not available yet!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000
    })
  }


  return (
    <section className='text-black min-h-screen pt-20'>
       <Title title="Shopping Cart" subtitle="Cart" />
       <div className='max-w-[1200px] mx-auto'>
        {cart.length === 0 ? 
        (
          <div className='flex items-center flex-col space-y-5'>
          <span>Cart is Empty!</span>
          <Link href={"/products"} role="button" className='cart-btn max-w-max'>Go Shopping!</Link>
          </div>
        ): (
          <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
          { cart.map(product => (
           <CartItem key={product.id} product={product} dispatch={dispatch} />
          ))}
          </div>
        )}
        {cart.length > 0 ? (
        <div className='text-center my-5 flex items-center flex-col space-y-2'>
        <span>Subtotal ({cart.length}) items</span>
        <span>Total: € {total}</span>
        <button onClick={checkout} className='cart-btn max-w-max'>
            Proceed to Checkout
         </button>
       </div>): (<span>&nbsp;</span>)}
       </div>
    </section>
  )
}

export default Cart