import PageHeading from '../../components/pageHeading'
import Layout from '../../components/layout'
import styles from './Services.module.scss'
import Head from 'next/head'

export default function Services(){
  return (
    <Layout>
      <Head>
        <title>Services</title>
      </Head>
      <PageHeading title="Services" path="Home / Services" />
      <div className={styles.contentWrapper}>
      </div>
    </Layout>
  )
}
