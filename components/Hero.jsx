import taina from "../images/tainat.png";
import Image from "next/image";
import Link from "next/link"
import {GiHairStrands} from "react-icons/gi"

const Hero = () => {
  return (
    <section className=" text-white min-h-[80vh] w-full font-roboto bg-[#5f3822]">
      <div className="grid grid-cols-2 max-w-[1200px] mx-auto">
        <Image src={taina} alt="taina photo" />
      <div className="flex flex-col items-center justify-center space-y-7">
        <h1 className="text-5xl font-dancingScript flex gap-2"> <GiHairStrands className="text-pink-400"/>Cabelereira Tainá</h1>
        <p className="text-center text-xl tracking-widest">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, sapiente! 
          Ullam perspiciatis iusto praesentium. Dolorum culpa quisquam maxime neque
          illum aut eveniet ducimus doloremque laboriosam, excepturi quos? Accusamus, incidunt dolorem.
        </p>
        <button className="border border-white py-2 px-5 rounded-md shadow-sm">
          <Link href={"/contact"}>
          Agende já
          </Link>
        </button>
      </div>
      </div>
    </section>
  )
}

export default Hero