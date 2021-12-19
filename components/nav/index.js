// components/nav/index.js

import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Nav.module.scss'

export default function Nav() {
  const router = useRouter()

  return (
    <header>
      <nav  className={styles.navigation}>
        <div className={styles.logo}>
          <div>
            <a href="/">
              <img src="/img/logo.svg" />
            </a>
          </div>
        </div>

        <div className={styles.menu}>
          <ul>
            <li>
              <Link href="/">
                <a className={router.pathname == "/" ?  styles.active: null}>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a className={router.pathname == "/services" ?  styles.active: null}>
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={router.pathname == "/about" ?  styles.active: null}>
                  About us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={router.pathname == "/contact" ?  styles.active: null}>
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
