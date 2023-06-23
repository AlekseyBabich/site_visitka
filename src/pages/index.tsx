import styles from './Home.module.css'
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Home() {
    return (
        <div className={ styles.container }>
            <div className={ styles['main__container'] }>

                <div className={ styles.header }>
                    <Header/>
                </div>


                <div className={ styles.content }>
                    <div className={ styles['content__block'] }>

                    </div>
                </div>


                <div className={ styles.footer }>
                    <Footer/>
                </div>

            </div>
        </div>
    )
}
