const readline = require('readline');
const Board = require('./board.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const playTurn = () => {
  rl.question('Please enter your next move: ', (line) => {
    if (line === 'quit') {
      return rl.close();
    }

    let moves = [];
    try {
      console.log(line);
      moves = line.split(' ');

      // Validate move
      if (board.isValidMove(moves[0], moves[1])) {
        // Make move
        board.makeMove(moves[0], moves[1]);
        board.printBoard();
      } else {
        throw new Error();
      }
    } catch (e) {
      console.log(
        'Invalid input.\nPlease enter two numbers corresponding to the x y coordinates of your move, separated by a space.\n',
      );
    }

    if (board.isWinner()) {
      console.log(`We have a winner!\nCongratuations ${board.isWinner()}!`);
      return rl.close();
    }

    playTurn(); // Next turn
  });
};

const board = new Board(3);
board.printBoard();

playTurn();
