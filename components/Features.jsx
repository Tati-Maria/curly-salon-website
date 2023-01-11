import Image from "next/image";
import hair from "../images/salon (3).jpg"
import beatiful from "../images/beatiful.jpg";

const Features = () => {
  return (
    <section className='features'>
      <div className="w-full">
        <Image src={beatiful} alt="woman" />
      </div>
      <div className="feature-flex">
        <span className="feature-text__behind">
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
        <button className="feature-btn">Read more</button>
      </div>
      <div className="feature-flex-2">
      <span className="feature-text__behind">
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
        <button className="feature-btn">Read More</button>
      </div>
      <div className="w-full">
        <Image src={hair} alt="hair" className="text-gray object-cover w-full" />
      </div>
    </section>
  )
}

export default Features;