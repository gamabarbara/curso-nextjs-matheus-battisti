import Footer from "./Footer"
import Navbar from "./Navbar"
import VoltarHome from "./VoltarHome"
import styles from "../styles/MainContainer.module.css"

export default function MainContainer({children}) {
return(
    <>
    <Navbar />
    <div className={styles.container}>{children}</div>
    <VoltarHome />
    <Footer />
    </>
)
}