// components/layout.js

import Navbar from '../nav'
import Footer from '../footer'
import styles from './Layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.wrapper}>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </div>
    </>
  )
}
