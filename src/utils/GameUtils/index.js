const checkForsequence = (option1, option2, option3) => {
  return option1 === option2 && option2 === option3;
};

export const checkForWinner = (board) => {
  console.log("in here");
  //0 1 2
  //3 4 5
  //6 7 8

  //ROWS
  for (let i = 0; i < 9; i += 3) {
    if (checkForsequence(board[i], board[i + 1], board[i + 2])) {
      console.log("ROW WINNER");
    }
  }
  //COLUMN
  for (let i = 0; i < 3; i += 1) {
    if (checkForsequence(board[i], board[i + 3], board[i + 6])) {
      console.log("COLUMN WINNER");
    }
  }
  //DIAGNOL
  if (board[0] === board[4] && board[4] === board[8]) {
    console.log("we have a HYENA up in here");
    return true;
  }

  if (board[2] === board[4] && board[4] === board[6]) {
    console.log("we have a HYENA up in here");
    return true;
  }
};
