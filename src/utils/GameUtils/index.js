const checkForsequence = (option1, option2, option3) => {
  return option1 === option2 && option2 === option3;
};

export const checkForWinner = (board) => {
  //0 1 2
  //3 4 5
  //6 7 8

  //ROWS
  for (let i = 0; i < 9; i += 3) {
    if (checkForsequence(board[i], board[i + 1], board[i + 2])) {
      console.log("ROW WINNER");
      return true;
    }
  }
  //COLUMN
  for (let i = 0; i < 3; i += 1) {
    if (checkForsequence(board[i], board[i + 3], board[i + 6])) {
      console.log("COLUMN WINNER");
      return true;
    }
  }
  //DIAGNOL 1
  if (board[0] === board[4] && board[4] === board[8]) {
    console.log("we have a HYENA up in here");
    return true;
  }
  //DIAGNOL 2
  if (board[2] === board[4] && board[4] === board[6]) {
    console.log("we have a HYENA up in here");
    return true;
  }
};
