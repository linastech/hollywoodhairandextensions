// components/nav/index.js
import { useRouter } from 'next/router'
import { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import useWindowSize from '../../hooks/useWindowSize'
import styles from './Nav.module.scss'


export default function Nav() {
  const windowSize = useWindowSize()
  const ref_input = useRef(null)

  return (
    <header className={styles.header}>
      {windowSize.width < 650 ? (
        <nav role="mobile-navigation">
          <input 
            type="checkbox"
            id="togglenav"
            ref={ref_input}
          />
          <div className={styles.close}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className={styles.menu}>
          <Navigation mobileRef={ref_input} />
            <a className={styles.mobileLogo} href="/">
              <img src="/img/logo.svg" />
            </a>
          </div>
        </nav>
      ):(
        <nav role="desktop-navigation" className={styles.navigation}>
          <div className={styles.logo}>
            <div>
              <a href="/">
                <img src="/img/logo.svg" />
              </a>
            </div>
          </div>

          <div className={styles.menu}>
            <Navigation mobileRef={ref_input} />
          </div>
        </nav>
      )}
    </header>
  )
}

const Navigation = ({mobileRef}) => {
  const router = useRouter()
  const windowSize = useWindowSize()
  const services = ['/beaded-hair-extensions', '/cold-fusion-hair-extensions', '/fusion-hair-extensions', '/tape-in-hair-extensions']
  const [subMenuState, toggleSubmenu] = useState(services.indexOf(router.pathname) > -1)

  useEffect(() => {
    router.events.on('routeChangeComplete', url => {
      if(url === '/#services')
        handleScroll()
    })
  })

  const handleScroll = () => {
    const destination = document.querySelector('.servicesScroll')

    if (destination) {
      destination.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  const handleMobile = () => {
    if(windowSize.width < 650)
      mobileRef.current.dispatchEvent(
      new MouseEvent('click', {
        'view': window, 
        'bubbles': true, 
        'cancelable': false
        })
      )
  }

  const handleClick = () => {
    if(windowSize.width < 650)
      toggleSubmenu(!subMenuState)

    if(router.pathname != '/' && windowSize.width > 650)
      router.push('/', '/#services')

    if(router.pathname != '/#services' && windowSize.width > 650)
      handleScroll()
  }
  return (
    <ul>
      <li>
        <ActiveLink handleMobile={handleMobile} href="/" name="Home" />
      </li>
      <li>
        <a 
          onClick={handleClick}
          className={
            services.indexOf(router.pathname) > -1 ? styles.active: null
          }
          >
            Services
            <i className={clsx(
              styles.caret, 
              'zmdi', 
              subMenuState ? 'zmdi-caret-up-circle' : 'zmdi-caret-down-circle'
            )}></i>
          </a>
          <ol className={clsx(
            styles.subMenu,
            subMenuState ? styles.submenuActive : null
          )}>
            <li>
              <ActiveLink handleMobile={handleMobile} href="/beaded-hair-extensions" name="Beaded Hair Extensions" />
            </li>
            <li>
              <ActiveLink handleMobile={handleMobile} href="/cold-fusion-hair-extensions" name="Cold Fusion Hair Extensions" />
            </li>
            <li>
              <ActiveLink handleMobile={handleMobile} href="/fusion-hair-extensions" name="Fusion Hair Extensions" />
            </li>
            <li>
              <ActiveLink handleMobile={handleMobile} href="/tape-in-hair-extensions" name="Tape-In Hair Extensions" />
            </li>
          </ol>
      </li>
      <li>
        <ActiveLink handleMobile={handleMobile} href="/hair-highlights" name="Hair Highlights & Cuts Gallery" />
      </li>
      <li>
        <ActiveLink handleMobile={handleMobile} href="/about" name="About us" />
      </li>
      <li>
        <ActiveLink handleMobile={handleMobile} href="/contact" name="Contact" />
      </li>
    </ul>
  )
}

const ActiveLink = ({href, name, handleMobile}) => {
  const router = useRouter()

  return (
    <Link href={href}>
      <a onClick={handleMobile} className={router.pathname == href ?  styles.active: null}>
        {name}
      </a>
    </Link>
  )
}
