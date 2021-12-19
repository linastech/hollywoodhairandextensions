import ReactBeforeSliderComponent from 'react-before-after-slider-component'
import 'react-before-after-slider-component/dist/build.css'
import styles from './BeforeAfter.module.scss'

export default function BeforeAfter({before, after}){
  const beforeImg = {
    imageUrl: before
  }
  const afterImg = {
    imageUrl: after
  }

  return (
    <div className={styles.container}>
      <ReactBeforeSliderComponent
        firstImage={afterImg}
        secondImage={beforeImg}
      />
    </div>
  )
}
