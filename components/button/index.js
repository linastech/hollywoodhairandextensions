// components/button/index.js
import { useRouter } from 'next/router'
import clsx from 'clsx'
import styles from './Button.module.scss'

export default function Button({href, children}) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()

    if(href !== null)
      router.push(href)
  }

  return (
    <button className={styles.button}>
      <a href={href} onClick={(e) => handleClick(e)}>
        {children}
        <i className={clsx('zmdi', 'zmdi-long-arrow-right')}></i>
      </a>
    </button>
  )
}
Button.defaultProps = {
  href: null
}
