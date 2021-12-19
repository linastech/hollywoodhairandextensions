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
              <ActiveLink href="/" name="Home" />
            </li>
            <li>
              <ActiveLink href="/services" name="Services" />
                <ol className={styles.subMenu}>
                  <li>
                    <ActiveLink href="/beaded-hair-extensions" name="Beaded Hair Extensions" />
                  </li>
                  <li>
                    <ActiveLink href="/cold-fusion-hair-extensions" name="Cold Fusion Hair Extensions" />
                  </li>
                  <li>
                    <ActiveLink href="/fusion-hair-extensions" name="Fusion Hair Extensions" />
                  </li>
                  <li>
                    <ActiveLink href="/tape-in-hair-extensions" name="Tape-In Hair Extensions" />
                  </li>
                </ol>
            </li>
            <li>
              <ActiveLink href="/hair-highlights" name="Hair Highlights & Cuts Gallery" />
            </li>
            <li>
              <ActiveLink href="/about" name="About us" />
            </li>
            <li>
              <ActiveLink href="/contact" name="Contact" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

const ActiveLink = ({href, name}) => {
  const router = useRouter()

  return (
    <Link href={href}>
      <a className={router.pathname == href ?  styles.active: null}>
        {name}
      </a>
    </Link>
  )
}
