import clsx from 'clsx'
import Layout from '../../components/layout'
import PageHeading from '../../components/pageHeading'
import Map from '../../components/map'
import ContactForm from '../../components/contactForm'
import styles from './Contact.module.scss'
import Head from 'next/head'

export default function Contact(){
  return (
    <Layout>
      <Head>
        <title>Contact us</title>
      </Head>
      <PageHeading title="Contact Us" path="Home / Contact us" />
      <div className={styles.contentWrapper}>
        <Map />
        <div className={styles.info}>
          <div className={styles.leftCol}>
            <ul>
              <li>Visit Hollywood Hair & Extensions</li>
              <li>
                <i className={clsx('zmdi', 'zmdi-map')}></i>
                23-50 Waters Edge Dr #2M
                Bayside, NY 11360
              </li>
              <li>
                <i className={clsx('zmdi', 'zmdi-globe')}></i>
                hollywoodhairandextensions.com
              </li>
            </ul>
            <ul>
              <li>Message us</li>
              <li>
                <i className={clsx('zmdi', 'zmdi-email')}></i>
                olga@example.com
              </li>
              <li>
                <i className={clsx('zmdi', 'zmdi-phone')}></i>
                + (516) 680-4274
              </li>
            </ul>
            <ul>
              <li>Open Hours</li>
              <li>
                <i className={clsx('zmdi', 'zmdi-alarm')}></i>
                Mon - Fri: 8:00am - 9:30pm
              </li>
              <li>
                <i className={clsx('zmdi', 'zmdi-alarm-check')}></i>
                Sat - Sun: 9:00am - 10:00pm
              </li>
            </ul>
          </div>
          <div className={styles.rigthCol}>
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}
