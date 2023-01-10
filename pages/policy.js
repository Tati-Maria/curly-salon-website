import React from 'react'
import Title from '../components/Title';

const Policy = () => {
  return (
    <section className='min-h-screen w-full pt-20 pb-10 px-4 lg:px-0 text-gray-900 dark:text-white'>
      <Title title="Our Policy" subtitle="Policy" />
      <div className='max-w-[1200px] mx-auto grid grid-cols-1 gap-9 lg:grid-cols-2 place-items-center py-10 px-6 lg:px-0'>
        <div className='py-1'>
          <h3 className='font-bold text-lg pb-6'>Delivery Policy:</h3>
          <ul className='list-disc space-y-3 text-justify'>
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
        <div>
          <h3 className='font-bold text-lg pb-6'>Return and Exchange Policy:</h3>
          <ul className='policy-list'> 
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
        </div>
        <div>
          <h3 className='font-bold text-lg pb-6'>Payment Policy:</h3>
          <ul className='policy-list'>
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
        <div>
          <h3 className='font-bold text-lg pb-6'>Cancellation Policy:</h3>
          <ul className='policy-list'>
            <li>
              <p>We understand that unforeseen circumstances may arise 
                and changes to your schedule may be necessary. 
                In order to provide the best service to our clients and 
                to be fair to our stylists, we have established the following cancellation policy:</p>
            </li>
            <li>
              <p>If you need to cancel or reschedule your appointment, please do so at least 24 hours in advance of your scheduled appointment time.</p>
            </li>
            <li>
              <p>Cancellations or rescheduling with less than 24 hours notice will be subject to a cancellation fee of 50% of the service total.</p>
            </li>
            <li>
              <p>No-shows will be charged the full price of the scheduled service.</p>
            </li>
            <li>
              <p>We appreciate your understanding and cooperation in this matter.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Policy;

