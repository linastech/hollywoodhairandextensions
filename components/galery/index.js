// components/galery/index.js
import clsx from 'clsx'
import Heading from '../heading'
import { v4 as uuidv4 } from 'uuid'
import Slider from "react-slick"
import styles from './Galery.module.scss'
import "slick-carousel/slick/slick.css"

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
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false,
      }
    },
  ]
}

export default function Galery() {
  return (
    <div>
      <Heading>Gallery</Heading>

      <div className={styles.container}>
        <Slider {...settings}>
          {images.map((image, index) => 
            <div 
              key={uuidv4()} 
              className={clsx(
                styles.item,
              )}
            >
              <div className={styles.inner}>
                <img alt={index} src={image} />
              </div>
            </div>
          )}  
        </Slider>
      </div>
    </div>
  )
}
