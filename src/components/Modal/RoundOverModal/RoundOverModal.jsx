import React, { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext";
import { ModalContext } from "../../../contexts/ModalContext";
import { SubTitle, Title } from "../../../styles/General.styled";
import Button from "../../Button/Button";
import { ModalBody, ModalFooter, ModalHeader } from "../Modal.styled";

function RoundOverModal() {
  const { resetBoard } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  return (
    <>
      <ModalHeader>
        <Title>Nka Wins Round </Title>
      </ModalHeader>
      <ModalBody>
        <SubTitle>Choices will be switched</SubTitle>
        <SubTitle>Nkah: 1</SubTitle>
        <SubTitle>Thaby: 1</SubTitle>
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
