import Image from "next/image";
import beautiful from "../images/beatiful.jpg";
import Title from "../components/Title";
import ReviewCard from "../components/ReviewCard";



const About = () => {

  return (
    <section className='min-h-screen w-full pt-20 pb-20'>
      <Title title="About Us" subtitle="Curly" />
        <div className='max-w-[1200px] mx-auto'>
          <div className="grid grid-col-1 lg:grid-cols-2 gap-10 py-10 px-7 mb-10">
          <Image src={beautiful} alt="a beautiful woman"/>
          <article className="space-y-4">
            <p>
              Welcome to Curly Hair Salon, where we specialize in helping our clients look and feel their best. 
            Our team of skilled stylists are dedicated to providing top-quality services in a warm and welcoming atmosphere.
            </p>
            <p>
              We offer a wide range of services, including haircuts, styling, coloring, and more. 
            Whether you want to update your look with a new haircut or change up your hair color, 
            we have the expertise and products to help you achieve your desired look.
            </p>
            <p>
              In addition to our styling services, we also offer a variety of hair care products to 
            help you maintain your new look at home. From shampoo and conditioner to styling products, 
            we have everything you need to keep your hair looking its best.
            </p>
            <p>
              Thank you for considering Curly Hair Salon for all of your hair care needs. We look forward to 
            working with you and helping you achieve your desired look. Please do not hesitate to contact 
            us with any questions or to schedule an appointment.
            </p>
          </article>
          </div>
          <Title title="What our costumers say" subtitle="Reviews"/>
          <div>
            <ReviewCard />
          </div>
        </div>
        <p className="text-center text-gray-500 pt-40 text-sm">Curly Hair Salon All Rights Reserved &copy;</p>
    </section>
  )
}

export default About;