import ReactBeforeSliderComponent from 'react-before-after-slider-component'
import 'react-before-after-slider-component/dist/build.css'
import PageHeading from '../../components/pageHeading'
import Layout from '../../components/layout'
import styles from './Services.module.scss'
import Head from 'next/head'

const FIRST_IMAGE = {
  imageUrl: 'https://hollywoodhairandextensions.com/wp-content/uploads/2021/06/5-after-color-before-extensions-768x1024.jpg'
}
const SECOND_IMAGE = {
  imageUrl: 'https://hollywoodhairandextensions.com/wp-content/uploads/2021/06/5-before-color-and-extensions.jpg'
}

export default function Services(){
  return (
    <Layout>
      <Head>
        <title>Services</title>
      </Head>
      <PageHeading title="Services" path="Home / Services" />
      <div className={styles.contentWrapper}>
        <div className={styles.slider}>
          <ReactBeforeSliderComponent
            firstImage={FIRST_IMAGE}
            secondImage={SECOND_IMAGE}
          />
        </div>
      </div>
    </Layout>
  )
}
