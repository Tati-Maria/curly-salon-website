import React, { createContext, useContext, useReducer } from 'react';
import shampoo from "../images/shampoo.jpg"
import hairdry from "../images/dryer.jpg"
import hairbrush from "../images/hairbrush.jpg"
import hairgel from "../images/hairgel.jpg"
import night from "../images/nightserum.jpg"
import hairspry from "../images/hairspray.jpg"
import { cartReducer } from './Reducer';

export const products = [
    {
        id: "price_1MOiTKLXgnHaGkRkA7W9x9TH",
        name: "Hair Dryer",
        image: hairdry,
        price: 59.99,
        desc: "Curly hair dryer is the perfect tool for quickly drying and styling your hair. It features a powerful airflow and multiple heat settings to suit your specific hair type and desired style. The ceramic tourmaline technology helps to reduce frizz and static, while the lightweight design and long cord make it easy to use and maneuver. Whether you're in a rush to get out the door or taking your time to create the perfect look, our hair dryer is up to the task."
    },
    {
        id: "price_1MOiVgLXgnHaGkRk2yeWKTFW",
        name: "Hair Brush",
        image: hairbrush,
        price: 9.99,
        desc: "Our hair brush is designed to gently detangle and smooth your hair, leaving it looking and feeling healthy and shiny. It features a comfortable, easy-to-hold handle and a mix of natural boar bristles and synthetic fibers that work together to effectively detangle your hair without causing breakage or damage. The brush is suitable for all hair types and can be used on wet or dry hair. Whether you're looking to tame frizz and flyaways or simply want to add some shine to your locks, our hair brush is the perfect tool for the job."
    },
    {
        id: "price_1MOiXtLXgnHaGkRkw9P0SkQa",
        name: "Night Serum",
        image: night,
        price: 19.99,
        desc: "Curly night hair serum is a lightweight, non-greasy formula that helps to nourish and protect your hair. It's infused with a blend of natural oils and vitamins that work to repair damaged hair, reduce frizz and flyaways, and add a healthy-looking shine. The serum is easy to apply and absorbs quickly into the hair, leaving it feeling soft and silky. Whether you have dry, damaged, or color-treated hair, our hair serum is the perfect solution for keeping your locks looking and feeling their best. Simply apply a small amount to your hair after washing and styling, and enjoy beautiful, healthy-looking hair all day long."
    },
    {
        id: "price_1MOiZ1LXgnHaGkRkZTjEOemM",
        name: "Curly Shampoo",
        image: shampoo,
        price: 10.95,
        desc: "Our shampoo is specially formulated to nourish and strengthen your hair, leaving it looking and feeling healthy and beautiful. It contains a blend of natural ingredients, including argan oil and botanical extracts, that work to gently cleanse and moisturize your hair. The unique formula also helps to enhance shine and body, giving your hair a lustrous and full appearance. Whether you have dry, damaged, or color-treated hair, our shampoo is the perfect choice for maintaining the health and vitality of your locks."
    },
    {
        id: "price_1MOiaZLXgnHaGkRkowBzfINH",
        name: "Curly Hair Gel",
        image: hairgel,
        price: 29.99
    },
    {
        id: "price_1MOibgLXgnHaGkRkywcFjYAo",
        name: "Hair Spray",
        image: hairspry,
        price: 49.99,
        desc: "Our hair spray is a lightweight, flexible hold hairspray that helps to keep your style in place all day long. It's formulated with natural ingredients that work to nourish and protect your hair, while the fast-drying formula ensures that it won't weigh down your locks or leave any sticky residue. Whether you want to keep your curls bouncy and frizz-free or maintain a sleek and smooth look, our hair spray is the perfect finishing touch. Simply spritz it on to set your style, and enjoy long-lasting hold and a healthy, natural-looking finish."
    },
];

export const Cart = createContext();


const Context = ({children}) => {
    const items = products.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        desc: product.desc
    }));

    const [state, dispatch] = useReducer(cartReducer, {
        products: items,
        cart: []
    })


  return (
    <Cart.Provider value={{state, dispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default Context;

export const CartState = () => {
    return useContext(Cart);
}