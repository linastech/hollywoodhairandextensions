// components/galery/index.js
import clsx from 'clsx'
import Heading from '../heading'
import styles from './Galery.module.scss'

export default function Galery() {
  return (
    <div>
      <Heading>Galery</Heading>

      <div className={styles.contentWrapper}>
        lorem ipsum
      </div>
    </div>
  )
}
