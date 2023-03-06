import React, { createContext, useState } from "react";

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
  //INITIAL STATE OF THE GAME
  const [game, setGame] = useState({
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    player1: {
      choice: "x",
      name: "Nkanyiso",
      score: 0,
    },
    player2: {
      choice: "o",
      name: "Philani",
      score: 0,
    },
    turn: "x",
    roundWinner: "",
  });

  const updateBoard = (index) => {
    let updatedBoard = game.board;
    updatedBoard[index] = game.turn;
    setGame({
      ...game,
      board: updatedBoard,
      turn: game.turn === "x" ? "o" : "x",
    });
  };
  //BOARD RESET AFTER A COMPLETE ROUND
  const resetBoard = () => {
    setGame({
      ...game,
      board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    });
  };
  //SWITCH TURN (who starts)
  const toggleChoice = (choice) => (choice === "x" ? "o" : "x");
  const switchTurn = () => {
    setGame((prevGame) => ({
      ...prevGame,
      player1: {
        ...prevGame.player1,
        choice: toggleChoice(prevGame.player1.choice),
      },
      player2: {
        ...prevGame.player2,
        choice: toggleChoice(prevGame.player2.choice),
      },
      turn: "x",
    }));
  };
  const updateScore = (winner) => {
    setGame((prevGame) => ({
      ...prevGame,
      [winner]: {
        ...prevGame[winner],
        score: prevGame[winner].score + 1,
      },
    }));
  };
  //AFTER EVERY ROUND UPDATE
  const roundComplete = () => {
    if (game.turn === game.player1.choice) {
      updateScore("player1");
    } else if (game.turn === game.player2.choice) {
      updateScore("player2");
    } else {
      console.log("draw");
    }
    switchTurn();
  };
  return (
    <GameContext.Provider
      value={{ game, updateBoard, resetBoard, roundComplete }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
