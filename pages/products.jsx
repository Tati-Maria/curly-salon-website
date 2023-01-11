import Link from "next/link";
import Title from "../components/Title";
import { CartState } from "../context/Context";
import Product from "../components/Product";
import Container from "../layout/Container"

const Products = () => {
    const {state: {products}} = CartState();

  return (
    <section className='text-black pt-20 pb-20'>
       <Title title="See Our Products" subtitle="Products" />
       <Container>
        <ul className='grid grid-cols-1 lg:grid-cols-3 items-center gap-20'>
            {products.map(product => (<Product key={product.id} product={product} />
            ))}
        </ul>
        <p className="text-center text-sm mt-12">
          See about our delivery & return policy 
        <Link href={"/policy"} className="underline text-blue-800"> Here</Link>
        </p>
       </Container>
    </section>
  )
}

export default Products;