import styles from './Home.module.css'
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles['main_container']}>

        <Header/>

        {/*<div className={styles['content']}>
          <div className={styles['content_block']}>
            <div className={styles['content_block-img']}>
            </div>
            <div className={styles['content_block-text']}>
              <div className={styles['content_block-text_name']}>
              </div>
              <div className={styles['content_block-text_desc']}>
              </div>
            </div>
          </div>
        </div>*/}

        <Footer/>

      </div>
    </div>
  )
}
