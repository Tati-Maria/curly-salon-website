import salon from "../images/salon.jpg"

const Contact = () => {
  return (
    <section className=" text-white py-16 h-[50vh] w-full bg-center" style={{backgroundImage: `url(${salon})`}}>
        <div className='flex items-center flex-col'>
            <span className='pb-2 uppercase font-bold text-xs'>Follow our work</span>
            <h3 className='font-bold text-5xl uppercase'>Newsletter</h3>
            <p className='text-center py-5 px-5 lg:px-0'>Get a shiny, satin soft hair with the best hair products & a 
               team of hairdressers that will<br className='hidden lg:block' /> transform your look. Follow us! 
            </p>
            <form className='flex flex-col space-y-2 lg:block'>
                <input type="email" placeholder='Email' className="text-base py-[3px] text-black" />
                <button className='uppercase text-base font-semibold bg-black py-1 px-10'>
                  Sign up
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact;