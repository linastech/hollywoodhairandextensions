import Layout from '../../components/layout'
import styles from './About.module.scss'
import Head from 'next/head'

export default function About(){
  return (
    <Layout>
      <Head>
        <title>About us</title>
      </Head>
      <div className={styles.contentWrapper}>
        About us
      </div>
    </Layout>
  )
}
