// components/feedback/index.js
import clsx from 'clsx'
import Heading from '../heading'
import styles from './Feedback.module.scss'

export default function Feedback() {
  return (
    <div>
      <Heading>What our clients say</Heading>

      <div className={styles.contentWrapper}>
        lorem ipsum
      </div>
    </div>
  )
}
