import Heading from '../../components/heading'
import PageHeading from '../../components/pageHeading'
import Masonry from '../../components/masonry'
import Layout from '../../components/layout'
import styles from './About.module.scss'
import Head from 'next/head'

export default function About(){
  return (
    <Layout>
      <Head>
        <title>About us</title>
      </Head>
      <PageHeading title="About us" path="Home / About us" />
      <div className={styles.contentWrapper}>
        <div className={styles.story}>
          <div className={styles.storyImageWrapper}>
            <div className={styles.storyImage}>
              <img className={styles.image} src="/img/aboutusbg.jpg" />
              <div className={styles.imageShadow} />
            </div>
          </div>
          {/* <img className={styles.image} src="/img/aboutusbg.jpg" /> */}
          <div className={styles.storyContent}>
            <div className={styles.preHead}>My story</div>
            <h1>Hi I'm Olga!</h1>
            <p>
              I, Olga Capasso, hold certifications for hair extensions and can furnish them upon request.<br /><br />
              I am licensed in NY and NJ currently acquiring my Connecticut License. I am a professional hairdresser with over ten years of experience in the beauty industry. My passion is to make people happy, and my focus is to provide them with the hair of their dreams. I also offer services like your typical salon setting, including color and haircuts, blowouts, and Brazilian treatments.
            </p>
            <div className={styles.footer}>
              <h4>Olga Capasso</h4>
              <span>/ Owner</span>
            </div>
          </div>
        </div>
        <Heading>Hair styles i did</Heading>
        <Masonry />
      </div>
    </Layout>
  )
}
