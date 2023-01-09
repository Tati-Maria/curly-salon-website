import Link from "next/link";
import Title from "../components/Title";
import { CartState } from "../context/Context";
import Product from "../components/Product";

const Products = () => {
    const {state: {products}} = CartState();

  return (
    <section className='text-black pt-20 pb-20'>
       <Title title="See Our Products" subtitle="Products" />
        <ul className='prod-container'>
            {products.map(product => (<Product key={product.id} product={product} />
            ))}
        </ul>
        <p className="text-center text-sm mt-12">See about our delivery & return policy <Link href={"/about"} className="underline text-gray-800">Here</Link></p>
    </section>
  )
}

export default Products;