class Board {
  constructor(size) {
    this.squares = [];
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        row.push(' ');
      }
      this.squares.push(row);
    }
    this.size = size;
    this.currLetter = 'x'; // X always goes first
  }

  printBoard() {
    let boardString = '\n';
    for (let i = 0; i < this.size; i++) {
      const row = this.squares[i];
      for (let j = 0; j < this.size; j++) {
        boardString += row[j];

        // add devider for all but last
        if (j + 1 !== this.size) {
          boardString += '|';
        }
      }
      // add devider for all but last
      if (i + 1 !== this.size) {
        boardString += '\n';
        boardString += '-'.repeat(this.size * 2 - 1);
        boardString += '\n';
      }
    }

    boardString += '\n'; // Extra new line for aesthetics
    console.log(boardString);
  }

  /*
  Return winning player's letter, or false if no winner yet
  */
  isWinner() {
    // Check diagonal down
    let firstSquare = this.squares[0][0];
    if (firstSquare !== ' ') {
      for (let i = 1; i < this.size; i++) {
        if (this.squares[i][i] !== firstSquare) {
          break;
        } else if (i + 1 === this.size) {
          return firstSquare; // Return winner's letter
        }
      }
    }

    // Check diagonal up
    firstSquare = this.squares[this.size - 1][0];
    if (firstSquare !== ' ') {
      for (let i = 1; i < this.size; i++) {
        if (this.squares[this.size - 1 - i][i] !== firstSquare) {
          break;
        } else if (i + 1 === this.size) {
          return firstSquare; // Return winner's letter
        }
      }
    }

    // Check rows
    for (let i = 0; i < this.size; i++) {
      firstSquare = this.squares[i][0];
      if (firstSquare !== ' ') {
        for (let j = 0; j < this.size; j++) {
          if (this.squares[i][j] !== firstSquare) {
            break;
          } else if (j + 1 === this.size) {
            return firstSquare; // Return winner's letter
          }
        }
      }
    }

    // Check cols
    for (let i = 0; i < this.size; i++) {
      firstSquare = this.squares[0][i];
      if (firstSquare !== ' ') {
        for (let j = 0; j < this.size; j++) {
          if (this.squares[j][i] !== firstSquare) {
            break;
          } else if (j + 1 === this.size) {
            return firstSquare; // Return winner's letter
          }
        }
      }
    }

    return false;
  }

  isValidMove(x, y) {
    return this.squares[y][x] === ' ';
  }

  makeMove(x, y) {
    this.squares[y][x] = this.currLetter;

    if (this.currLetter === 'x') {
      this.currLetter = 'o';
    } else {
      this.currLetter = 'x';
    }
  }
}

module.exports = Board;
