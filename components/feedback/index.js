// components/feedback/index.js
import clsx from 'clsx'
import Heading from '../heading'
import styles from './Feedback.module.scss'

const list = [
  {
    image: '/img/feedback/one.jpg',
    message: "Olga dramatically changed how I look and feel. It’s been a long time since I had my hair cut, and Olga took the time to explain how different styles would affect my facial shape. She helped me decide, and was a perfectionist! I’m very happy with Olga, and plan to call her again in a few months. Thank you Olga!",
    name: "Desirée",
    date: "2020-09-28"
  }
]



export default function Feedback() {
  return (
    <div className={styles.wrapper}>
      <Heading>What our clients say</Heading>

      <div className={styles.container}>
        <div className={styles.image}>
          <img src={list[0].image} />
        </div>
        <div className={styles.content}>
          <div className={styles.messageBox}>
            <i className={clsx('zmdi', 'zmdi-quote', styles.quote)} />
            <p>{list[0].message}</p>
            <div className={styles.name}>{list[0].name}</div>
            <div className={styles.date}>/ {list[0].date}</div>
          </div>
        </div>
        <div className={styles.shadow} />
      </div>
    </div>
  )
}
