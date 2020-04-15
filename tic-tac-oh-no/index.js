const readline = require('readline');
const Board = require('./board.js');
const AiPlayer = require('./aiPlayer.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let aiPlayer = null;
const playAiTurn = () => {
  if (!aiPlayer) {
    aiPlayer = new AiPlayer('easy');
  }

  const aiMoves = aiPlayer.playerMove(board).split(' ');
  console.log(`\nComputer move: ${aiMoves}`);
  board.makeMove(aiMoves[0], aiMoves[1]);
  playTurn('c');
};

const playTurn = (playType) => {
  rl.question('Please enter your next move: ', (line) => {
    if (line === 'quit') {
      return rl.close();
    }

    let moves = [];
    try {
      moves = line.split(' ');

      // Validate move
      if (board.isValidMove(moves[0], moves[1])) {
        // Make move
        board.makeMove(moves[0], moves[1]);
      } else {
        throw new Error();
      }

      if (board.isWinner()) {
        console.log(`\nWe have a winner!\nCongratuations ${board.isWinner()}!`);
        return rl.close();
      }

      if (playType === 'c') {
        playAiTurn();

        if (board.isWinner()) {
          console.log(
            `\nWe have a winner!\nCongratuations ${board.isWinner()}!`,
          );
          return rl.close();
        }
      } else {
        playTurn('p'); // Next turn
      }
    } catch (e) {
      console.log(
        'Invalid input.\nPlease enter two numbers corresponding to the x y coordinates of your move, separated by a space.\n',
      );
      playTurn(playType);
    }
  });
};

// Auto-run
const board = new Board(3);
rl.question(
  "Would you like to play PvP or PvC (input 'p' or 'c'): ",
  (line) => {
    board.printBoard();

    if (line === 'c') {
      playTurn('c');
    } else if (line === 'p') {
      playTurn('p');
    } else {
      console.log(
        "Invalid input.\nPlease re-start the game and enter the letter 'p' or the letter 'c'\n",
      );

      return rl.close();
    }
  },
);
