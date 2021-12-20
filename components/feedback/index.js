// components/feedback/index.js
import clsx from 'clsx'
import { useState, useEffect } from 'react'
import Heading from '../heading'
import styles from './Feedback.module.scss'

const list = [
  {
    image: '/img/feedback/1.jpg',
    message: "Olga dramatically changed how I look and feel. It’s been a long time since I had my hair cut, and Olga took the time to explain how different styles would affect my facial shape. She helped me decide, and was a perfectionist! I’m very happy with Olga, and plan to call her again in a few months. Thank you Olga!",
    name: "Desirée",
    date: "2020-09-28"
  },
  {
    image: '/img/feedback/2.jpg',
    message: "Olga is very experienced, meticulous and very easygoing, She understood my requirements and gave me the look that I wanted, she was very patient and took the time to make sure my hair has no Damage and looks good, highly recommend, I would definitely hire her again in future , Thanks Olga!",
    name: "Sue S",
    date: "2021-06-07"
  },
  {
    image: '/img/feedback/3.jpg',
    message: "Olga is by far the best hairdresser I have had! She takes her time and is perfectionist in her work. I have tried several hairdressers and I have never been as happy as I was with her. She really listened to me and gave me suggestions and I will forever be one of her clients and now one of her friends! Once Olga does your hair, you will not regret it! She made my highlights shine and it was perfect. They blended in with my natural color and I have gotten so many compliments on my hair. Best money spent on my hair was with Olga.",
    name: "Laura Vicidomini",
    date: "2021-05-28"
  },
  {
    image: '/img/feedback/4.jpg',
    message: "Olga was really sweet and does her job well. I am in love with my extensions and they turned out great. 10/10 recommend",
    name: "Lexi Castro",
    date: "2021-05-26"
  },
  {
    image: '/img/feedback/5.jpg',
    message: "Olga’s work is truly outstanding. She specializes in extensions and the high quality of her work definitely shows. She is an extremely skilled professional. She really loves her work and making sure your hair is absolutely perfect. Olga is very professional and very skilled! I highly recommend her!! Thank you Olga for all you’ve done and I can’t wait till my next visit with you!!",
    name: "Rita Hoag",
    date: "2021-04-15"
  },
  {
    image: '/img/feedback/6.jpg',
    message: "Olga is a wonderful and professional hairdresser She came to my home to do my hair and is so patient and absolutely an amazing hairdresser. She takes her time and is totally professional with her work taking the time she needs. I have been to many hairdressers around the world and I have to say she has been by far the most amazing. I would highly recommend her. Thank you Olga for all your hard work ",
    name: "Helen Oliveira",
    date: "2020-12-15"
  },
  {
    image: '/img/feedback/7.jpg',
    message: "Olga came to our home today and gave my wife Maria and I amazing haircuts. We couldn’t be more pleased. Maria said this is the best she’s had in 18 years! I am now officially out of the dog house. Thanks Olga. Until next time. Steve",
    name: "Steve",
    date: "2020-08-25"
  },
  {
    image: '/img/feedback/8.jpg',
    message: "Olga is very detailed and will not cut any corners to get the job done. She took the time to do what no other stylist has done for me before. My highlights and haircut look gorgeous and she styled my hair very beautifully. She is amazing!",
    name: "Ali Sutain",
    date: "2020-07-28"
  },
]

export default function Feedback() {
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      selected < list.length - 1 ? setSelected(selected + 1) : setSelected(0)  
    }, 20000)
    
    return () => clearInterval(interval);
  })

  return (
    <div className={styles.wrapper}>
      <Heading>What our clients say</Heading>

      <div className={styles.container}>
        <div className={styles.image}>
          <img src={list[selected].image} />
        </div>
        <div className={styles.content}>
          <div className={styles.messageBox}>
            <i className={clsx('zmdi', 'zmdi-quote', styles.quote)} />
            <p>
              {list[selected].message}
            </p>
            <div className={styles.name}>{list[selected].name}</div>
            <div className={styles.date}>/ {list[selected].date}</div>
          </div>
        </div>
        <div className={styles.shadow} />
      </div>
    </div>
  )
}
