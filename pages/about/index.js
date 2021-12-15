import PageHeading from '../../components/pageHeading'
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
      </div>
    </Layout>
  )
}
