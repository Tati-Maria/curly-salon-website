

const Hero = () => {
  return (
    <section className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-3 place-items-center uppercase py-16">
      <div className="text-gray-900 place-content-end">
        <h2 className="font-bold text-2xl text-center lg:text-end tracking-wider pb-10 lg:pb-0">Working<br/> Hours</h2>
      </div>
      <ul className="flex flex-col col-span-2 w-full px-8 lg:px-0">
        <li className="flex justify-between py-2 border-b-2 border-grey-600">
          <p className="font-bold">Working Days</p>
          <time className="text-gray-400">9am - 8pm</time>
        </li>
        <li className="flex justify-between py-2 border-b-2 border-grey-600">
          <p className="font-bold">Saturday</p>
          <time className="text-gray-400">10am - 7pm</time>
        </li>
        <li className="flex justify-between py-2 border-b-2 border-grey-600">
          <p className="font-bold">Sunday</p>
          <p className="text-gray-400">Closed</p>
        </li>
        <li className="flex justify-between py-2 border-b-2 border-grey-600">
          <p className="font-bold">Holidays</p>
          <p className="text-gray-400">Closed</p>
        </li>
      </ul>
    </section>
  )
}

export default Hero