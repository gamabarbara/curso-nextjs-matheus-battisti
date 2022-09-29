import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Página principal</title>
        <meta name="keywords" content="Roupas, calçados, boné"></meta>
        <meta name="description" content="Encontre as melhores roupas para você"></meta>
      </Head>
      <div className={styles.title}>
        <h1>Hello World Next.JS</h1>
      </div>
      <Image src="/images/image01.jpg" width="400px" height="600px" alt="imagem"/>
    </>
  );
}
