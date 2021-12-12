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
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About us</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
