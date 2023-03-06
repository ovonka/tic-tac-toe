import React from "react";
import { Container, Title, SubTitle } from "../../styles/General.styled";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <Container columnBased>
      <Title>Tictactoe</Title>
      <SubTitle>Play with your friends , Higher score wins!</SubTitle>
      <Button onClick={() => navigate("/game-on")}>Play now</Button>
    </Container>
  );
}

export default Home;
