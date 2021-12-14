// pages/index.js
import clsx from 'clsx'
import Head from 'next/head'
import Layout from '../components/layout'
import Services from '../components/services'
import Feedback from '../components/feedback'
import Galery from '../components/galery'
import Openhours from '../components/openhours'
import Button from '../components/button'
import styles from './Home.module.scss'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Hollywood Hair and Extensions</title>
        </Head>
        <section className={styles.hero}>
          <div className={styles.promo}>
            <h1>
              Hair extensions help you achieve almost any hairstyle. <br />
              They add volume, fullness and create longer, <br />
              thicker hair!
            </h1>
            <div className={styles.button}>
              <Button>Book now!</Button>
            </div>
          </div>
          <div className={styles.heroBG} />
        </section>
        
        <div className={styles.contentWrapper}>
          <Services />
          <Feedback />
          <Galery />
          <Openhours />
        </div>
      </Layout>
    </>
  )
}
