import React from "react";
import { Container } from "./Home.styled";
import { Title } from "../../styles/General.styled";
import Header from "../../components/Header/Header";

function Home() {
  return (
    <Container>
      <Header/>
      <Title>Tictactoe</Title>
    </Container>
  );
}

export default Home;
