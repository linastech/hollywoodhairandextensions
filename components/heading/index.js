// components/heading/index.js
import clsx from 'clsx'
import styles from './Heading.module.scss'

export default function Heading({children}) {
  return (
    <div className={styles.container}>
      <h2>{children}</h2>
      <div className={styles.icon} />
    </div>
  )
}
