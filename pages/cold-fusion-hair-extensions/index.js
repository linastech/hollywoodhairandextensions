import Consultation from "../../components/consultation"
import Faq from "react-faq-component"
import Button from '../../components/button'
import Heading from '../../components/heading'
import Layout from '../../components/layout'
import Description from '../../components/servicePage/description'
import BeforeAfter from '../../components/servicePage/beforeAfter'
import styles from '../ServicePage.module.scss'
import Head from 'next/head'

const faq = {
  rows: [
    {
      title: "How long do cold fusion hair extensions last?",
      content: `
          <p><span class="bold">Cold fusion extensions last a relatively long time, 3-7 months.</span> There is a large gap between three to seven months because their longevity depends on each person’s hair and lifestyle. When well taken care of, cold fusion hair extensions can last longer than other methods. </p>
          <p>You may or may not lose some extensions before these 3-7 months; everyone’s hair is different. If you have extensions fall out before the 3-7 months, this is normal. Some people have hair that sheds more than others, so there is no way to guarantee none will come out before that time. When your extensions are in, they will grow with your natural hair, similar to how your nail grows when you have acrylic nails.</p>
          <p><span class="bold">Cold fusion extensions last a relatively long time, 3-7 months.</span> There is a large gap between three to seven months because their longevity depends on each person’s hair and lifestyle. When well taken care of, cold fusion hair extensions can last longer than other methods. </p>
          <p>You may or may not lose some extensions before these 3-7 months; everyone’s hair is different. If you have extensions fall out before the 3-7 months, this is normal. Some people have hair that sheds more than others, so there is no way to guarantee none will come out before that time. When your extensions are in, they will grow with your natural hair, similar to how your nail grows when you have acrylic nails.</p>
        `,
    },
    {
      title: "Can you apply cold fusion extensions yourself?",
      content: `<p>No, you must have your cold fusion hair extensions professionally installed by a licensed cosmetologist. They must also be removed by a professional.</p>`
    },
    {
      title: "How do you care for cold fusion hair extensions?",
      content: `
        <p>You can wash your hair and blow-dry it without ruining your extensions. The maintenance is relatively easy once you get used to it. Along with being given a maintenance care sheet upon installation, we will show you how to brush your extensions with your extension brush. We will also go over the maintenance rules such as keeping your hair in a ponytail at night, not going to bed with it wet, only using professional products, especially when it comes to shampoo and conditioner you use.</p>
        <p>You can wash, blow-dry, curl, straighten, brush, swim, glaze, and continue with regular root touch-ups (single process or partial highlights) while you have extensions. You may deposit color over the extensions with nothing higher than a 20-vol developer, but you cannot lighten/bleach the extensions. </p>
      `,
    }
  ],
}

const config = {
  animate: true,
  tabFocus: true
};

export default function ColdFusionHairExtensions(){
  return (
    <Layout>
      <Head>
        <title>Cold Fusion Hair Extensions</title>
      </Head>
      <div className={styles.headLine} />
      <div className={styles.contentWrapper}>
        <Description 
          title="Cold Fusion Hair Extensions"
          subTitle="Do you want to change up your look? Are you looking for extra volume or want to experiment with different colors? Hair extensions are the perfect way to achieve your hair goals!"
          image="/img/servicePages/coldFusionHairExtensions/intro.jpg"
        >
          <p>
            Whether you want your hair glamorous for a special occasion or want to change your everyday style, Hollywood Hair and Extensions can help! We specialize in hair extensions. You can get your hair the way you want it!
          </p>
          <p>
            We offer the personal and professional attention you deserve so that you never feel uncared for or rushed! We stay on top of the latest hair trends and the most up-to-date hair extension techniques. 
          </p>
          <Button href="/contact">Online contact request</Button>
          <p className={styles.footer}>
            Cold fusion hair extensions are one type of extensions that we offer at Hollywood Hair and Extensions. We use hair made from 100% human Remy hair which comes in various colors and textures. But what are cold fusion hair extensions, and are they the right type for you?
          </p>
        </Description>
        <Heading>Before & After</Heading>
        <div className={styles.content}>
          <div className={styles.beforeAfter}>
            <BeforeAfter 
              before="/img/servicePages/coldFusionHairExtensions/before.jpg"
              after="/img/servicePages/coldFusionHairExtensions/after.jpg" 
            />
            <div className={styles.galleryButton}>
              <Button href="/hair-highlights">See more styles in gallery</Button>
            </div>
          </div>
          <div className={styles.qa}>
            <h3>What are cold fusion hair extensions?</h3>
            <p>
            Cold fusion, also known as a micro link, is another method that is applied by weaving small sections of hair through a micro link tube.<br /> Cold fusion extensions do not use heat to apply the hair. The hair is bonded to your natural hair via an ultrasound applicator. 
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
