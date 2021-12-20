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


const data = [
  {
    title: "Balayage on Brown Hair & Glaze",
    before: "/img/hairHighlightGalery/balayage/before.jpg",
    after: "/img/hairHighlightGalery/balayage/after.jpg",
    images: [
      '/img/hairHighlightGalery/balayage/1.jpg',
      '/img/hairHighlightGalery/balayage/2.jpg',
      '/img/hairHighlightGalery/balayage/3.jpg',
      '/img/hairHighlightGalery/balayage/4.jpg',
      '/img/hairHighlightGalery/balayage/5.jpg',
      '/img/hairHighlightGalery/balayage/6.jpg'
    ]
  },
  {
    title: "Hair Highlights & Single Color Process",
    before: "/img/hairHighlightGalery/singleColorProcess/before.jpg",
    after: "/img/hairHighlightGalery/singleColorProcess/after.jpg",
    images: [
      '/img/hairHighlightGalery/singleColorProcess/1.jpg',
      '/img/hairHighlightGalery/singleColorProcess/2.jpg',
      '/img/hairHighlightGalery/singleColorProcess/1.jpg',
      '/img/hairHighlightGalery/singleColorProcess/2.jpg',
    ]
  },
  {
    title: "Keratin Blow Out & Cut",
    before: "/img/hairHighlightGalery/keratinBlowOutandCut/before.jpg",
    after: "/img/hairHighlightGalery/keratinBlowOutandCut/after.jpg",
    images: [
      '/img/hairHighlightGalery/keratinBlowOutandCut/1.jpg',
      '/img/hairHighlightGalery/keratinBlowOutandCut/2.jpg',
      '/img/hairHighlightGalery/keratinBlowOutandCut/3.jpg',
      '/img/hairHighlightGalery/keratinBlowOutandCut/4.jpg',
      '/img/hairHighlightGalery/keratinBlowOutandCut/5.jpg',
      '/img/hairHighlightGalery/keratinBlowOutandCut/6.jpg'
    ]
  },
  {
    title: "Hair Highlights & Glaze",
    before: "/img/hairHighlightGalery/hairHighlightsandGlaze/before.jpg",
    after: "/img/hairHighlightGalery/hairHighlightsandGlaze/after.jpg",
    images: [
      '/img/hairHighlightGalery/hairHighlightsandGlaze/1.jpg',
      '/img/hairHighlightGalery/hairHighlightsandGlaze/2.jpg',
      '/img/hairHighlightGalery/hairHighlightsandGlaze/3.jpg',
      '/img/hairHighlightGalery/hairHighlightsandGlaze/4.jpg',
      '/img/hairHighlightGalery/hairHighlightsandGlaze/5.jpg',
      '/img/hairHighlightGalery/hairHighlightsandGlaze/6.jpg',
      '/img/hairHighlightGalery/hairHighlightsandGlaze/7.jpg'
    ]
  }
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
          {data.map((hairStyle, index) => (
            <>
              <div 
                className={clsx(
                  index % 2 === 0 ? styles.reverse : null,
                  styles.section
                )}
              >
                <div className={styles.beforeAfter}>
                  <BeforeAfter 
                    before={hairStyle.before}
                    after={hairStyle.after}
                  />
                </div>
                <div className={styles.gallery}>
                  <h3>{hairStyle.title}</h3>
                  <Gallery images={hairStyle.images} />
                </div>
              </div>
              {index < (data.length - 1) && (
                <div className={styles.divider} />
              )}
            </>
          ))}
      </div>
    </Layout>
  )
}


const Gallery = ({images}) => {
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
