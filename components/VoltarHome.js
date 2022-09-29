import Link from "next/link"
import styles from "../styles/VoltarHome.module.css"

export default function VoltarHome() {
    return(
      <div className={styles.button}>
        <Link href="/" >
        <a>Voltar para a home</a>
      </Link>
      </div>
        
    )
}