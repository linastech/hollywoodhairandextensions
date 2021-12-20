// components/openhours/index.js
import Heading from '../heading'
import Button from '../button'
import styles from './Openhours.module.scss'

export default function Openhours() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.messageBox}>
            <Heading>Open hours</Heading>

            <div className={styles.hours}>
              <ul>
                <li>Monday to Friday</li>
                <li>8:00am - 11:00am</li>
                <li>2:00pm - 5:00pm</li>
                <li>7:00pm - 9:30pm</li>
              </ul>
              <ul>
                <li>Saturday to Sunday</li>
                <li>9:00am - 11:30am</li>
                <li>2:00pm - 5:30pm</li>
                <li>7:00pm - 10:00pm</li>
              </ul>
            </div>
            <Button href="/contact">Contact</Button>
          </div>
        </div>
        <div className={styles.image}>
          <img src="/img/openhoursbg.jpg" />
        </div>
        <div className={styles.shadow} />
      </div>
    </div>
  )
}
