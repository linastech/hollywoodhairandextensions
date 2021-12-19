import styles from './Description.module.scss'

export default function Description({title, subTitle, image, children}){
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} /> 
      <div className={styles.body}>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        {children}
      </div>
    </div>
  )
}
