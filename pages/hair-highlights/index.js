import Head from 'next/head'
import Slider from "react-slick"
import clsx from 'clsx' 
import { v4 as uuidv4 } from 'uuid'
import "slick-carousel/slick/slick.css"
import Heading from '../../components/heading'
import Layout from '../../components/layout'
import BeforeAfter from '../../components/servicePage/beforeAfter'
import styles from './BeadedHairExtensions.module.scss'
import gStyles from '../../components/galery/Galery.module.scss'


const images = [
  '/img/carousel/1.jpg',
  '/img/carousel/2.jpg',
  '/img/carousel/3.jpg',
  '/img/carousel/4.jpg',
  '/img/carousel/5.jpg',
  '/img/carousel/6.jpg',
  '/img/carousel/7.jpg',
  '/img/carousel/8.jpg',
  '/img/carousel/9.jpg'
]

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "0px",
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000
}

export default function BeadedHairExtensions(){
  return (
    <Layout>
      <Head>
        <title>Hair Highlights & Cuts Gallery</title>
      </Head>
      <div className={styles.contentWrapper}>
        <Heading>Hair Highlights & Cuts Gallery</Heading>
          <div className={styles.wrapper}>
            <div className={styles.beforeAfter}>
              <BeforeAfter 
                before="/img/hairHighlightGalery/balayage/before.jpg"
                after="/img/hairHighlightGalery/balayage/after.jpg" 
              />
            </div>
            <div className={styles.gallery}>
              <h3>Balayage on Brown Hair & Glaze</h3>
              <Gallery />
            </div>
          </div>
      </div>
    </Layout>
  )
}


const Gallery = ({items}) => {
  return (
    <div className={gStyles.container}>
      <Slider {...settings}>
        {images.map((image, index) => 
          <div 
            key={uuidv4()} 
            className={clsx(
              gStyles.item,
            )}
          >
            <div className={gStyles.inner}>
              <img alt={index} src={image} />
            </div>
          </div>
        )}  
      </Slider>
    </div>
  )
}
