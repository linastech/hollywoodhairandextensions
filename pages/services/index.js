import Layout from '../../components/layout'
import styles from './Services.module.scss'
import Head from 'next/head'

export default function Services(){
  return (
    <Layout>
      <Head>
        <title>Services</title>
      </Head>
      <div className={styles.contentWrapper}>
        Services
      </div>
    </Layout>
  )
}
