import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { checkForWinner } from "../../utils/GameUtils";

function GameCell({ cellItem, index }) {
  const { updateBoard, game } = useContext(GameContext);
  const handleCellClick = () => {
    updateBoard(index);
    const result = checkForWinner(game.board);
  };
  return <CellStyle onClick={handleCellClick}>{cellItem}</CellStyle>;
}

export default GameCell;
