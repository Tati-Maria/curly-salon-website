import Link from "next/link";
import Title from "../components/Title";
import { CartState } from "../context/Context";
import Product from "../components/Product";

const Products = () => {
    const {state: {products}} = CartState();

  return (
    <section className='text-black pt-20 pb-20'>
       <Title title="See Our Products" subtitle="Products" />
        <ul className='pt-10 max-w-[1200px] mx-auto w-2/5 md:w-2/4 lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-16'>
            {products.map(product => (<Product key={product.id} product={product} />
            ))}
        </ul>
        <p className="text-center text-sm mt-12">See about our delivery & return policy <Link href={"/about"} className="underline text-gray-800">Here</Link></p>
    </section>
  )
}

export default Products;