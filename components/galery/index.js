// components/galery/index.js
import clsx from 'clsx'
import Heading from '../heading'
import { v4 as uuidv4 } from 'uuid'
import Slider from "react-slick"
import styles from './Galery.module.scss'
import "slick-carousel/slick/slick.css"; 

const images = [
  '/img/carousel/one.jpg',
  '/img/carousel/one.jpg',
  '/img/carousel/one.jpg',
  '/img/carousel/one.jpg',
  '/img/carousel/one.jpg',
  '/img/carousel/one.jpg',
  '/img/carousel/one.jpg',
  '/img/carousel/one.jpg',
  '/img/carousel/one.jpg'
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
};

export default function Galery() {
  return (
    <div>
      <Heading>Galery</Heading>

      <div className={styles.container}>
        <Slider {...settings}>
          {images.map((value, index) => 
            <div 
              key={uuidv4()} 
              className={clsx(
                styles.item,
              )}
            >
              <div className={styles.inner}>
                <img alt={index} src="/img/carousel/one.jpg" />
              </div>
            </div>
          )}  
        </Slider>
      </div>
    </div>
  )
}
