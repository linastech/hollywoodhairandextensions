// components/services/index.js
import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import clsx from 'clsx'
import Heading from '../heading'
import Button from '../button'
import styles from './Services.module.scss'
import services from './services.json'

export default function Services() {
  const [selectedService, pickService] = useState(services[0])

  return (
    <div className={clsx(styles.container, 'servicesScroll')}>
      <Heading>Our Services</Heading>

      <div className={styles.contentWrapper}>
        <Item width="26rem" height="26rem" className="selected" image={selectedService.img} />
        <div className={styles.content}>
          <div className={styles.innerWrapper}>
            <h3>{selectedService.title}</h3>
            <div>
              <span>Duration: </span>
              <span className={styles.bold}>{selectedService.duration}</span>
            </div>
            <div>
              <span>Price: </span>
              <span className={styles.bold}>{selectedService.price}</span>
            </div>
            <div className={styles.textWrapper}>
              <p>{selectedService.description}</p>
            </div>
            <div>
              <Button href={selectedService.href}>Learn More</Button>
            </div>
            <div className={styles.line} />
          </div>
        </div>
      </div>
      <div className={styles.listWrapper}>
        <ul>
          {services.map(service => (
            <li onClick={() => pickService(service)} key={uuidv4()}>
              <Item width="11rem" height="11rem" image={service.img} />
              <div
                className={clsx(
                  styles.button, 
                  selectedService.title === service.title ? styles.active : null
                )}>
                  {service.title}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const Item = function({width, height, image, className}){
  return <div 
    style={{
      width: width,
      height: height,
      backgroundImage: `url('${image}')`
    }}
    className={clsx(
      styles.itemContainer,
      styles[className]
    )} 
  />
}
