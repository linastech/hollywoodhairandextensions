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
      title: "Will tape-in hair extensions damage your hair?",
      content: `<p>Tape-in extensions are some of the least damaging options on the market. They are lightweight and do not pull on your natural hair. They grow out with your own hair and do not tug or pull. When applied and removed correctly by a licensed cosmetologist, tape-ins cause minimal damage.</p>`
    },
    {
      title: "Can you wash your hair, blow-dry it, swim, and more?",
      content: `
        <p>Yes! You can wash your hair and blow dry it without ruining your extensions. The maintenance is relatively easy once you get used to it. Along with being given a maintenance care sheet upon installation, we will show you how to brush your extensions with your extension brush. We will also go over the maintenance rules such as keeping your hair in a ponytail at night, not going to bed with it wet, only using professional products, especially when it comes to shampoo and conditioner you use.</p>
        <p>You CAN wash, blow-dry, curl, straighten, brush, swim, glaze, and continue with regular root touch-ups (single process or partial highlights) while you have extensions. You may deposit color over the extensions with nothing higher than a 20-vol developer, but you cannot lighten/bleach the extensions.</p>
      `
    },
    {
      title: "Can you apply tape-in extensions yourself?",
      content: `<p>No, you must have your tape-in hair extensions professionally installed by a licensed cosmetologist. They must also be removed by a professional.</p>`,
    },
    {
      title: "Are they a good option for fine hair?",
      content: `<p>Yes, clients with more fine hair will benefit from the volume and thickness these extensions can add. Tape-ins allow clients with thinner hair to have full hair without a full head of extensions. </p>`,
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
        <title>Tape-In Hair Extensions</title>
      </Head>
      <div className={styles.headLine} />
      <div className={styles.contentWrapper}>
        <Description 
          title="Tape-In Hair Extensions"
          subTitle="Tape-In hair extensions are the most requested semi-permanent method in salons around the world. At Hollywood Hair and Extensions, you’ll love our tape-ins!"
          image="/img/servicePages/tapeInHairExtensions/intro.jpg"
        >
          <p>
            We use 100% Remy human hair that is pre-taped and ready to apply. Hair extensions allow you to switch up your hair to a longer, fuller, more voluminous style that is fun and easy! The styles, colors, and textures are practically endless.
          </p>
          <p>
            At Hollywood Hair and Extensions, you can get your hair the way you want it! We offer the personal and professional attention you deserve so that you never feel uncared for or rushed! We stay on top of the latest hair trends and the most up-to-date hair extension techniques. 
          </p>
          <Button>Online contact request</Button>
          <p className={styles.footer}>
            If you want hair extensions, we will help you determine which type and style are best for you. We will teach you how to care for your hair extensions properly so you get the most out of them by ensuring they are healthy during their lifetime. We will also teach you how to care for your natural hair to improve its quality over time.
          </p>
        </Description>
        <Heading>Before & After</Heading>
        <div className={styles.content}>
          <div className={styles.beforeAfter}>
            <BeforeAfter 
              before="/img/servicePages/tapeInHairExtensions/before.jpg"
              after="/img/servicePages/tapeInHairExtensions/after.jpg" 
            />
            <div className={styles.galleryButton}>
              <Button>See more styles in gallery</Button>
            </div>
          </div>
          <div className={styles.qa}>
            <h3>What are tape-in extensions?</h3>
            <p>
              As the name implies, tape-in extensions adhere to the hair’s root. They are a semi-permanent hair extension method that typically lasts 8-12 weeks. They are reusable for multiple applications. Tape-ins are thin hair wefts, pre-taped, that get bonded in between your natural hair. It is the most requested hair extension method around the world. The process is 100% natural, requires no chemicals or special tools, and is relatively quick to install.
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
