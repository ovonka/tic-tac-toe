import React, { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext";
import { ModalContext } from "../../../contexts/ModalContext";
import { SubTitle, Title } from "../../../styles/General.styled";
import Button from "../../Button/Button";
import { ModalBody, ModalFooter, ModalHeader } from "../Modal.styled";

function RoundOverModal() {
  const { resetBoard, game } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  return (
    <>
      <ModalHeader>
        <Title primary>
          {game.roundWinner
            ? `${game.roundWinner.name} Wins Round`
            : "Round drawn"}
        </Title>
      </ModalHeader>
      <ModalBody>
        <SubTitle primary>Choices will be switched now</SubTitle>
        <SubTitle primary>
          {game.player1.name}:{game.player1.score}
        </SubTitle>
        <SubTitle primary>
          {game.player2.name}:{game.player2.score}
        </SubTitle>
      </ModalBody>
      <ModalFooter>
        {" "}
        <Button
          color="#f9c811"
          onClick={() => {
            handleModal();
            resetBoard();
          }}
        >
          Continue
        </Button>
        <Button color="#8437f9">Restart</Button>
      </ModalFooter>
    </>
  );
}

export default RoundOverModal;
