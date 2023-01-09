import Image from "next/image";
import hair from "../images/salon (3).jpg"
import woman from "../images/woman1.jpg";
import beatiful from "../images/beatiful.jpg";

const Features = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 text-white'>
      <div className="w-full">
        <Image src={beatiful} alt="woman" />
      </div>
      <div className="bg-slate-900 flex flex-col items-center justify-center space-y-5 relative w-full py-20 px-3 lg:px-0 lg:py-0">
        <span className="text-[150px] top-14 font-dancingScript absolute  text-yellow-200 opacity-30">
          Story
        </span>
        <span className="text-sm font-bold">Lisbon - since 1999</span>
        <h3 className="uppercase font-bold text-xl">Our success secret</h3>
        <p className="text-center max-w-[600px] mx-auto">
        At our salon, we believe that everyone deserves to have beautiful, healthy hair. 
        That&apos;s why we have developed a range of hair care services that cater to each 
        individual&apos;s unique needs and preferences. Our team of skilled stylists is dedicated 
        to providing you with the highest quality of care and attention.
        </p>
        <button className="border-2 border-white px-16 py-2 text-sm font-semibold uppercase">Read more</button>
      </div>
      <div className="bg-slate-900 flex flex-col items-center justify-center space-y-6 relative w-full px-3 order-4 py-20 lg:py-0 lg:order-none lg:px-0">
      <span className="text-[150px] top-14 font-dancingScript absolute  text-yellow-200 opacity-30">
          Process
        </span>
        <span className="text-sm font-bold">Lisbon - since 1999</span>
        <h3 className="uppercase font-bold text-xl">How we do it</h3>
        <p className="text-center max-w-[600px] mx-auto">
        Our salon is dedicated to providing the best hair care services to our clients. 
        We use top-quality products and techniques to ensure that your hair looks and feels its best. 
        Our stylists are trained to listen to your needs and preferences, and work with you to achieve
         your desired look. Trust us to give you the perfect hair transformation.
        </p>
        <button className="border-2 border-white px-16 py-2 text-sm font-semibold uppercase">Read More</button>
      </div>
      <div className="w-full">
        <Image src={hair} alt="hair" className="text-gray object-cover w-full" />
      </div>
    </section>
  )
}

export default Features;