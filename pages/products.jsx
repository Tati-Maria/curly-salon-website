//Next 
import Image from "next/image";
import Link from "next/link";
//Images
import shampoo from "../images/shampoo.jpg"
import hairdry from "../images/dryer.jpg"
import hairbrush from "../images/hairbrush.jpg"
import hairgel from "../images/hairgel.jpg"
import night from "../images/nightserum.jpg"
import hairspry from "../images/hairspray.jpg"

export const products = [
    {
        id: 1,
        name: "Hair Dryer",
        image: hairdry,
        price: 59.99
    },
    {
        id: 2,
        name: "Hair Brush",
        image: hairbrush,
        price: 9.99
    },
    {
        id: 3,
        name: "Night Serum",
        image: night,
        price: 19.99
    },
    {
        id: 4,
        name: "Curly Shampoo",
        image: shampoo,
        price: 10.95
    },
    {
        id: 5,
        name: "Curly Hair Gel",
        image: hairgel,
        price: 29.99
    },
    {
        id: 6,
        name: "Hair Spray",
        image: hairspry,
        price: 49.99
    },
]

const Products = () => {

  return (
    <section className='text-black pt-20 pb-20'>
        <div className='relative'>
            <span className='absolute inset-0 font-dancingScript text-gray-700 block text-center text-7xl opacity-10'>
                Products
            </span>
        <h2 className='font-extrabold text-5xl font-poppins text-center py-10 relative z-10'>See Our Products</h2>
        
        </div>
        <ul className='max-w-[1200px] w-2/3 mx-auto grid grid-col-1 gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {products.map(product => (
                <li key={product.id} className="space-y-2">
                    <Image src={product.image} alt={product.name} className="rounded-sm" />
                    <div className="flex items-center justify-between px-1">
                        <h4 className="text-lg">{product.name}</h4>
                        <p className="font-bold">€ {product.price}</p>
                    </div>
                    <div className="py-2 ">
                    <button className="bg-yellow-400 py-1 px-4 rounded-md shadow-sm"
                    >Add To Cart
                    </button>
                    </div>
                </li>
            ))}
        </ul>
        <p className="text-center text-sm mt-12">See about our delivery & return policy <Link href={"/about"} className="underline text-gray-800">Here</Link></p>
    </section>
  )
}

export default Products;

