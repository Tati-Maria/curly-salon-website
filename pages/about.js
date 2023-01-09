import Image from "next/image";
import beautiful from "../images/beatiful.jpg";
import delivery from "../images/delivery.jpg";
import Title from "../components/Title";


const About = () => {
  return (
    <section className='min-h-screen w-full pt-20 pb-20'>
      <Title title="About Us" subtitle="Curly" />
        <div className='max-w-[1200px] mx-auto grid grid-col-1 lg:grid-cols-2 gap-10 py-10 px-7'>
          <Image src={beautiful} alt="a beautiful woman"/>
          <article className="space-y-4">
            <p>
            Welcome to Curly Hair Salon, where we specialize in helping our clients look and feel their best. 
            Our team of skilled stylists are dedicated to providing top-quality services in a warm and welcoming atmosphere.</p>
            <p>We offer a wide range of services, including haircuts, styling, coloring, and more. 
            Whether you want to update your look with a new haircut or change up your hair color, 
            we have the expertise and products to help you achieve your desired look.</p>
            <p>In addition to our styling services, we also offer a variety of hair care products to 
            help you maintain your new look at home. From shampoo and conditioner to styling products, 
            we have everything you need to keep your hair looking its best.</p>
            <p>Thank you for considering Curly Hair Salon for all of your hair care needs. We look forward to 
            working with you and helping you achieve your desired look. Please do not hesitate to contact 
            us with any questions or to schedule an appointment.
            </p>
          </article>
        </div>
        <div className='relative'>
            <span className='absolute inset-0 font-dancingScript text-gray-700 block text-center text-7xl opacity-10'>
               Policy
            </span>
        <h3 className='font-extrabold text-3xl font-poppins text-center py-10 relative z-10'>Our Policy</h3>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-col-1 lg:grid-cols-2 py-4 gap-20 my-5 px-7 lg:px-0">
          <Image src={delivery} alt="someone receiving a box" />
          <ul className="space-y-3 list-disc">
            <h4 className="font-bold text-xl">Delivery Policy:</h4>
            <li>
              <p>Our salon offers a range of hair care products for sale to our clients.</p>
            </li>
            <li>
              <p>All products will be delivered to the address provided by the client at the time of purchase.</p>
            </li>
            <li>
              <p>Delivery fees may apply depending on the location and the size of the order.</p>
            </li>
            <li>
              <p>Delivery times may vary depending on the availability of the products and the location of the delivery address.</p>
            </li>
          </ul>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-col-1 lg:grid-cols-2 py-4 gap-20">

        <ul className="space-y-3 list-disc px-7 lg:px-0">
            <h4 className="font-bold text-xl">Return and Exchange Policy:</h4>
            <li>
              <p>If you are not satisfied with your hair care product, you may return it for a full refund within 30 days of the purchase date.</p>
            </li>
            <li>
              <p>To be eligible for a return, the product must be in its original packaging and in the same condition as when it was received.</p>
            </li>
            <li>
              <p>If the product was damaged during delivery, please contact us immediately to resolve the issue.</p>
            </li>
            <li>
              <p>If you would like to exchange a product for a different one, please contact us to make arrangements.</p>
            </li>
            <li>
              <p>Please note that custom orders, such as special color dyes, are not eligible for returns or exchanges.</p>
            </li>
          </ul>
        
          <ul className="space-y-3 list-disc px-7 lg:px-0">
            <h4 className="font-bold text-xl">Payment Policy:</h4>
            <li>
              <p>We accept cash, debit cards, and credit cards (Visa, Mastercard, Paypal, MBway) as forms of payment.</p>
            </li>
            <li>
              <p>Payment is due at the time of service.</p>
            </li>
            <li>
              <p>For services over €100, we require a 50% deposit to secure the appointment.</p>
            </li>
            <li>
              <p>For services over €500, we require a non-refundable deposit equal to 50% of the service total to secure the appointment.</p>
            </li>
          </ul>
        </div>
        <p className="text-center text-gray-500 pt-10">Curly Hair Salon All Rights Reserved &copy;</p>
    </section>
  )
}

export default About;