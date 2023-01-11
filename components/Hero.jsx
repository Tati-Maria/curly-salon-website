

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="text-gray-900 place-content-end">
        <h2 className="hero-title">Working<br/> Hours</h2>
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