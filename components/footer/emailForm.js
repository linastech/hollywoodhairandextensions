// components/footer/emailForm.js
import clsx from 'clsx'
import styles from './emailForm.module.scss'

export default function emailForm() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Want to get updates on Hollywood Hair & Extensions</div>
      <div className={styles.inputWrapper}>
        <input type="text" placeholder="Enter your mail" />
        <button></button>
      </div>
    </div>
  )
}
