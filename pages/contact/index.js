import Layout from '../../components/layout'
import styles from './Contact.module.scss'
import Head from 'next/head'

export default function Contact(){
  return (
    <Layout>
      <Head>
        <title>Contact us</title>
      </Head>
      <div className={styles.contentWrapper}>
        Contact
      </div>
    </Layout>
  )
}
