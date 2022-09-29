import styled from "styled-components";
import Head from "next/head";
export default function Shop() {
  return (
    <>
      <Head>
        <title>Shop Page</title>
        <meta name="keywords" content="Roupas, calçados, boné"></meta>
        <meta
          name="description"
          content="Encontre as melhores roupas para você"
        ></meta>
      </Head>
      <Container>
        <p>Encontre todos os produtos aqui</p>
        <ul>
          <li>Calças</li>
          <li>Vestidos</li>
          <li>Saias</li>
          <li>Blusas</li>
        </ul>
      </Container>
    </>
  );
}

const Container = styled.div`
  p {
    color: red;
    font-size: 20px;
    font-style: italic;
    margin-bottom: 30px;
  }
  ul {
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    list-style: none;
    font-weight: bold;
  }

  li {
    color: black;
    &:hover {
      color: red;
      transition: all 500ms;
    }
  }
`;
