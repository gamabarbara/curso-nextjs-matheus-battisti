import Link from "next/link";
import styles from "../styles/Navbar.module.css"


export default function Navbar() {
    return(
        <ul className={styles.navbar}>
        <li>
          <Link href="/products">
            <a>Produtos</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/shop">
            <a>Shop</a>
          </Link>
        </li>
        <li>
          <Link href="/todos">
            <a>Todos</a>
          </Link>
        </li>
      </ul>
    )
}