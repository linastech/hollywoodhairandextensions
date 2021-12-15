// components/pageHeading/index.js
import styles from './PageHeading.module.scss'

export default function Heading({title, path}) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <div className={styles.path}>{path}</div>
      </div>
    </div>
  )
}
