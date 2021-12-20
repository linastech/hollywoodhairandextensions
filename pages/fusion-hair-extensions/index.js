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
      title: "Will fusion hair extensions cause damage to your natural hair?",
      content: `<p>They are individually bonded, not fused, with 100% keratin bonds. There are no beads, metals, aluminum, glues, waxes, or adhesives in our bonds. So there is no damage, breakage, or hair loss as long as they’re installed by a licensed cosmetologist, maintained correctly by you, and removed by a professional. The hair comes in straight or wavy to match any hair textures.</p>`
    },
    {
      title: "How long do fusion extensions last?",
      content: `
        <p>With the proper maintenance, brushing correctly with the right brush and using the right shampoo and conditioner. Depending on your own hair and how much it sheds, extensions can last you anywhere from 3-6 months. This means they will need to be removed anywhere from 3 to 5 months after the day of installation. </p>
        <p>You may or may not lose some extensions before these 3-6 months; everyone’s hair is different. So if some of your extensions fall out before the 3-6 months, this is normal. Some people have hair that sheds more than others, so there is no way to guarantee none will come out before that time. When your extensions are in, they will grow with your natural hair, similar to how your nail grows when you have acrylic nails.  </p>
      `
    },
    {
      title: "How are fusion extensions installed?",
      content: `
        <p>The tips of the hair have a small keratin protein bond. The tip is solid until it is melted with a hair extension tool. The small tips at the end of the melting connector melt and then soften the bonds. The stylist molds and shapes the melted keratin around the hair. When it cools, the keratin creates a durable sealant. These are attached strand by strand, row by row, starting at the base of the head and working up the sides and back.</p>
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
        <title>Fusion Hair Extensions</title>
      </Head>
      <div className={styles.headLine} />
      <div className={styles.contentWrapper}>
        <Description 
          title="Fusion Hair Extensions"
          subTitle="Hair extensions are a great way to transform your hair overnight! They are great for adding volume and length, as well as the perfect way to hide a bad haircut or experiment with new color without damaging your hair."
          image="/img/servicePages/fusionHairExtensions/intro.jpg"
        >
          <p>
            If you want to achieve the perfect hair for your wedding day, prom night, or any other special occasion, contact Hollywood Hair and Extensions. We offer the personal and professional attention you deserve so that you never feel uncared for or rushed! 
          </p>
          <Button href="/contact">Online contact request</Button>
          <p className={styles.footer}>
            One hair extension method we offer is fusion hair extensions! It is one of the oldest and most effective techniques in the world of hair. It has gained popularity because of its natural appearance, long-lasting durability, and easy removal process. But what are fusion hair extensions, and how do the application and removal processes work?
          </p>
        </Description>
        <Heading>Before & After</Heading>
        <div className={styles.content}>
          <div className={styles.beforeAfter}>
            <BeforeAfter 
              before="/img/servicePages/fusionHairExtensions/before.jpg"
              after="/img/servicePages/fusionHairExtensions/after.jpg" 
            />
            <div className={styles.galleryButton}>
              <Button href="/hair-highlights">See more styles in gallery</Button>
            </div>
          </div>
          <div className={styles.qa}>
            <h3>What are fusion hair extensions?</h3>
            <p>
              Fusion extensions are identified by the keratin protein bond tip and heat application which makes them unique. Unlike tape-ins that come in wefts, fusion hair extensions come in strands of hair. These individual strands help ensure that once the application process is complete, the hair blends well and looks completely natural.
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
