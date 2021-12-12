// components/button/index.js
import clsx from 'clsx'
import styles from './Button.module.scss'

export default function Button({children}) {
  return (
    <button className={styles.button}>
      {children}
      <i className={clsx('zmdi', 'zmdi-long-arrow-right')}></i>
    </button>
  )
}
