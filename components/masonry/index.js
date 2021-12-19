import useSWR from 'swr'
import Gallery from "react-photo-gallery"
import styles from './Masonry.module.scss'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function MasonryComponent(){
  let { data, error } = useSWR(
    `/api/getimages`,
    fetcher
  )

  if (!data) return null

  const photos = data.map(image => {
    return {
      src: image,
      width: Math.floor( Math.random() * 400) + 350,
      height: Math.floor(Math.random() * 550) + 300 
    }
  })

  return (
    <Gallery 
      photos={photos} 
      direction={"column"} 
      renderImage={Image}
      margin={5}
    />
  )
}

const Image = function ({photo, top, left}){
  return (
    <div 
      className={styles.image}
      style={{
        left: left,
        top: top,
        width: `${photo.width}px`,
        height: `${photo.height}px`,
        backgroundImage: `url(${photo.src})`,
      }}
      {...photo}
    />
  )
}
