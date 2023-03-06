import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { checkForWinner } from "../../utils/GameUtils";
import { ReactComponent as IconX } from "../../assets/svgs/icon-x.svg";
import { ReactComponent as IconO } from "../../assets/svgs/icon-o.svg";
import { ReactComponent as IconXoutline } from "../../assets/svgs/icon-x-outline.svg";
import { ReactComponent as IconOoutline } from "../../assets/svgs/icon-o-outline.svg";
import { ModalContext } from "../../contexts/ModalContext";
import RoundOverModal from "../Modal/RoundOverModal/RoundOverModal";

function GameCell({ cellItem, index }) {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  //Handle board update
  const handleCellClick = () => {
    updateBoard(index);
    const result = checkForWinner(game.board);
    if (result) {
      roundComplete();
      handleModal(<RoundOverModal />);
    }
  };
  if (cellItem === "x") {
    return (
      <CellStyle>
        <IconX className="markedItem" />
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle>
        <IconO className="markedItem" />
      </CellStyle>
    );
  }
  return (
    <CellStyle onClick={handleCellClick}>
      {game.turn === "x" ? (
        <IconXoutline className="outlineIcon" />
      ) : (
        <IconOoutline className="outlineIcon" />
      )}
    </CellStyle>
  );
}

export default GameCell;
