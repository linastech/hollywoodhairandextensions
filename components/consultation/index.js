import Link from 'next/link'

export default function Consultation(){
  return (
    <>
      <h3>Consultation and Installation Appointment</h3>
      <p>Consultations are $75, which goes towards your total service price. Hair extensions will only look natural with a proper consultation before application. Suppose you decide you want to get hair extensions or still unsure and have questions you would like answered before going further. In that case, we will need to set up an appointment for a consultation to:</p>
      <ul>
        <li>Discuss any questions or concerns you may have</li>
        <li>Match your hair color and texture and choose the technique best suits your needs and hair appearance goals, like length, volume, or color</li>
        <li>Identify how many strands you will need</li>
      </ul>
      <p><span className="bold">Consultations are a MUST</span>. I cannot determine how many extensions you need or give you a price quote without seeing your hair in person. It is almost impossible to assess your hair’s thickness, texture, and exact color through a picture. I want it to look as natural as possible, so in-person consultations are a necessity. </p>
      <p>During the consultation, I determine the correct tone, texture, and quantity of strands needed. Then I proceed to make your install appointment. I do not keep hair in stock; I place orders upon request.</p>
      <p>A deposit is required to book an installation appointment. I accept cash, check, Zelle, Venmo, and Cashapp. If you decide to pay with a check, the check needs to clear before the hair is ordered, possibly leading to a longer wait time. All deposits are non-refundable because the supplier does not accept returns for hair orders. If you decide to make an appointment for a consultation, please make sure whatever hair color you have when completing the consultation is the same hair color you will have on installation day.</p>
      <p>Otherwise, you will have to return a second time to rematch your hair color before placing an order of hair extensions. If you think you’re ready to book a consultation, please <Link href="/contact"><a className="contactlink">contact us.</a></Link></p>
    </>
  )
}
