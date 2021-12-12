// components/footer/index.js
import clsx from 'clsx'
import EmailForm from './emailForm'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img src="/img/logo.svg" />
        </div>
        <div className={styles.infoWrapper}>
          <ul>
            <li>
              <i className={clsx('zmdi', 'zmdi-map')}></i> 23-50 Waters Edge Dr #2M <br /> Bayside, NY 11360
            </li>
            <li>
              <i className={clsx('zmdi', 'zmdi-globe')}></i> hollywoodhairandextensions.com
            </li>
          </ul>
          <ul>
            <li>
              <i className={clsx('zmdi', 'zmdi-email')}></i> olga@example.com
            </li>
            <li>
              <i className={clsx('zmdi', 'zmdi-phone')}></i> + (516) 680-4274
            </li>
          </ul>
          <ul>
            <li>
              <i className={clsx('zmdi', 'zmdi-alarm')}></i> Mon - Fri: 8:00am - 9:30pm
            </li>
            <li>
              <i className={clsx('zmdi', 'zmdi-alarm')}></i> Sat - Sun: 9:00am - 10:00pm
            </li>
          </ul>
        </div>
        <EmailForm />
      </div>
    </footer>
  )
}
