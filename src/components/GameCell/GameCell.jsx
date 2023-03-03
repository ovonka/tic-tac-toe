import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { checkForWinner } from "../../utils/GameUtils";

function GameCell({ cellItem, index }) {
  const { updateBoard, game } = useContext(GameContext);
  //Handle board update
  const handleCellClick = () => {
    updateBoard(index);
    checkForWinner(game.board);
  };
  return <CellStyle onClick={handleCellClick}>{cellItem}</CellStyle>;
}

export default GameCell;
