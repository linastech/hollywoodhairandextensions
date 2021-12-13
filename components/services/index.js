// components/services/index.js
import clsx from 'clsx'
import Heading from '../heading'
import Button from '../button'
import styles from './Services.module.scss'

export default function Services() {
  return (
    <div className={styles.container}>
      <Heading>Our Services</Heading>

      <div className={styles.contentWrapper}>
        <Item width="350px" height="350px" image="beaded" />
        <div className={styles.content}>
          <div className={styles.innerWrapper}>
            <h3>Beaded Hair Extensions</h3>
            <div>
              <span>Duration: </span>
              <span className={styles.bold}>30 minutes</span>
            </div>
            <div>
              <span>Price: </span>
              <span className={styles.bold}>75$</span>
            </div>
            <div className={styles.textWrapper}>
              <p>
                Beaded hair extensions are extensions where the hair is installed using a loop tool and secured to your head. Extensions lay flat against the head, and hair maintains 360 degrees of movement using this method; therefore, the client can wear their hair up or down as they please.
              </p>
            </div>
            <div>
              <Button>Learn More</Button>
            </div>
            <div className={styles.line} />
          </div>
        </div>
      </div>
      <div className={styles.listWrapper}>
        <ul>
          <li>
            <Item width="150px" height="150px" image="beaded" />
            <div className={clsx(styles.button, styles.active)}>Beaded Hair</div>
          </li>
          <li>
            <Item width="150px" height="150px" image="cold_fusion" />
            <div className={styles.button}>Cold Fusion</div>
          </li>
          <li>
            <Item width="150px" height="150px" image="fusion" />
            <div className={styles.button}>Fusion Hair</div>
          </li>
          <li>
            <Item width="150px" height="150px" image="highlights" />
            <div className={styles.button}>Tape-In Hair</div>
          </li>
          <li>
            <Item width="150px" height="150px" image="tape_in" />
            <div className={styles.button}>Hair Highlights & Cuts</div>
          </li>
        </ul>
      </div>
    </div>
  )
}

const Item = function({width, height, image}){
  return <div 
    style={{
      width: width,
      height: height,
      backgroundImage: `url('img/hairstyles/${image}.jpg')`
    }}
    className={styles.selected} 
  />
}
