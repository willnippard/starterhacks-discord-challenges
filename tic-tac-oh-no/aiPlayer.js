class AiPlayer {
  constructor(difficulty) {
    this.difficulty = difficulty;
  }

  randomMove(availableSquares) {
    const rand = Math.floor(
      Math.random() * Math.floor(availableSquares.length),
    );

    return availableSquares[rand];
  }

  playerMove(board) {
    if (this.difficulty === 'easy') {
      return this.randomMove(board.getEmptySquares());
    } else {
      return 'null';
    }
  }
}

module.exports = AiPlayer;
