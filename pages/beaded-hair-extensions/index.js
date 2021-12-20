import Consultation from "../../components/consultation"
import Faq from "react-faq-component"
import Button from '../../components/button'
import Heading from '../../components/heading'
import Layout from '../../components/layout'
import Description from '../../components/servicePage/description'
import BeforeAfter from '../../components/servicePage/beforeAfter'
import styles from './BeadedHairExtensions.module.scss'
import Head from 'next/head'

const faq = {
  rows: [
    {
      title: "Are beaded extensions right for you?",
      content: `
      <p>There are so many different styles of hair extensions. At Hollywood Hair and Extensions, we specialize in extensions. During your consultation, we will pair you with the type and style that is right for you.</p>
      <p>Beaded extensions are a great option if you have fine hair and want to add thickness and volume to your natural hair. Beaded extensions do not cause any damage to natural hair.  They are safe for using heat products and styling tools.<p>`,
    },
    {
      title: "Can you apply beaded hair extensions yourself?",
      content: `<p>No, you must have your beaded hair extensions professionally installed by a licensed cosmetologist. They must also be removed by a professional.</p>`
    },
    {
      title: "How do you care for your beaded hair extensions?",
      content: `
        <p>You can wash your hair and blow dry it without ruining your extensions. The maintenance is relatively easy once you get used to it. Along with being given a maintenance care sheet upon installation, we will show you how to brush your extensions with your extension brush. We will also go over the maintenance rules such as keeping your hair in a ponytail at night, not going to bed with it wet, only using professional products, especially when it comes to shampoo and conditioner you use.</p>
        <p>You can wash, blow-dry, curl, straighten, brush, swim, glaze, and continue with regular root touch-ups (single process or partial highlights) while you have extensions. You may deposit color over the extensions with nothing higher than a 20-vol developer, but you cannot lighten/bleach the extensions.</p>
        <p>You can wash your hair and blow dry it without ruining your extensions. The maintenance is relatively easy once you get used to it. Along with being given a maintenance care sheet upon installation, we will show you how to brush your extensions with your extension brush. We will also go over the maintenance rules such as keeping your hair in a ponytail at night, not going to bed with it wet, only using professional products, especially when it comes to shampoo and conditioner you use.</p>
        <p>You can wash, blow-dry, curl, straighten, brush, swim, glaze, and continue with regular root touch-ups (single process or partial highlights) while you have extensions. You may deposit color over the extensions with nothing higher than a 20-vol developer, but you cannot lighten/bleach the extensions. </p>
      `,
    }
  ],
}

const config = {
  animate: true,
  tabFocus: true
};

export default function BeadedHairExtensions(){
  return (
    <Layout>
      <Head>
        <title>Beaded Hair Extensions</title>
      </Head>
      <div className={styles.headLine} />
      <div className={styles.contentWrapper}>
        <Description 
          title="Beaded Hair Extensions"
          subTitle="Hair extensions help you achieve almost any hairstyle. They add volume, fullness and create longer, thicker hair!"
          image="/img/servicePages/beadedHairExtensions/intro.jpg"
        >
          <p>
            If you are bored with your current color or want to experiment with colors but are hesitant to dye your hair permanently, hair extensions are just what you need. The hairstyle possibilities are endless with hair extensions. 
          </p>
          <p>
            At Hollywood Hair and Extensions, we specialize in hair extensions. You can get your hair the way you want it! We offer the personal and professional attention you deserve so that you never feel uncared for or rushed! We stay on top of the latest hair trends and the most up-to-date hair extension techniques.
          </p>
          <Button href="/contact">Online contact request</Button>
          <p className={styles.footer}>
            There are four main types of hair extensions in which we specialize. Beaded extensions are one of them. If you have a question about our beaded hair extensions or any other services we offer, please contact us to schedule a consultation!
          </p>
        </Description>
        <Heading>Before & After</Heading>
        <div className={styles.content}>
          <div className={styles.beforeAfter}>
            <BeforeAfter 
              before="/img/servicePages/beadedHairExtensions/before.jpg"
              after="/img/servicePages/beadedHairExtensions/after.jpg" 
            />
            <div className={styles.galleryButton}>
              <Button href="/hair-highlights">See more styles in gallery</Button>
            </div>
          </div>
          <div className={styles.qa}>
            <h3>What are beaded hair extensions?</h3>
            <p>
              Beaded hair extensions are extensions where the hair is installed using a loop tool and secured to your head by pairing small sections of the strand of extensions with your natural hair held together using a micro silicone bead. It might sound strange, but the bead is tiny and is the same color as the extension. Extensions lay flat against the head, and hair maintains 360 degrees of movement using this method; therefore, the client can wear their hair up or down as they please.
            </p>

            <Faq data={faq} config={config} />
          </div>
          <div className={styles.consultation}>
            <Consultation />
          </div>
        </div>
      </div>
    </Layout>
  )
}
