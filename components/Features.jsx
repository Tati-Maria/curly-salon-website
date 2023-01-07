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
      <div className="bg-slate-900 flex flex-col items-center justify-center space-y-5 relative w-full">
        <span className="text-[150px] top-14 font-dancingScript absolute  text-yellow-200 opacity-30">
          Story
        </span>
        <span className="text-sm font-bold">Lisbon - since 1999</span>
        <h3 className="uppercase font-bold text-xl">Our success secret</h3>
        <p className="text-center max-w-[600px] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Omnis sequi quae illo labore quisquam. Corrupti deleniti error, 
          fuga recusandae accusantium officiis distinctio neque ipsum! 
          Odit perferendis harum vero nostrum odio!
        </p>
        <button className="border-2 border-white px-16 py-2 text-sm font-semibold uppercase">Read more</button>
      </div>
      <div className="bg-slate-900 flex flex-col items-center justify-center space-y-5 relative w-full">
      <span className="text-[150px] top-14 font-dancingScript absolute  text-yellow-200 opacity-30">
          Process
        </span>
        <span className="text-sm font-bold">Lisbon - since 1999</span>
        <h3 className="uppercase font-bold text-xl">How we do it</h3>
        <p className="text-center max-w-[600px] mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Culpa expedita sint quaerat ullam porro ut illum blanditiis, 
          ex perferendis, quasi consequuntur cum veritatis optio enim 
          soluta! Recusandae voluptate esse nam?
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