import Row from './row.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: 1,
      player2: 2,
      current: null,
      gameBoard: [],
      end: false,
      winner: '',
    };
    this.play = this.play.bind(this);
  }
  newGame() {
    let gameBoard = [];
    for (let x = 0; x < 6; x++) {
      let row = [];
      for (let y = 0; y < 7; y++) { row.push(null) }
      gameBoard.push(row);
    }
    this.setState({
      gameBoard,
      currentPlayer: this.state.player1,
      end: false,
      winner: ''
    });
  };

  componentDidMount() {
    this.newGame();
  }

  switchPlayer() {
    return (this.state.currentPlayer === this.state.player1) ? this.state.player2 : this.state.player1;
  }

  play(y) {
    if (!this.state.end) {
      let gameBoard = this.state.gameBoard;
      for (let x = 5; x >= 0; x--) {
        if (!gameBoard[x][y]) {
          gameBoard[x][y] = this.state.currentPlayer;
          break;
        }
      }

      let result = this.checkBoard(gameBoard);
      if (result === this.state.player1) {
        this.setState({ gameBoard, end: true, winner: 'Player 1 (red) wins!' });
      } else if (result === this.state.player2) {
        this.setState({ gameBoard, end: true, winner: 'Player 2 (yellow) wins!' });
      } else if (result === 'draw') {
        this.setState({ gameBoard, end: true, winner: 'Draw game.' });
      } else {
        this.setState({ gameBoard, currentPlayer: this.switchPlayer() });
      }
    } else {
      this.setState({ winner: 'Game over. Please start a new game.' });
    }
  }

  colCheck(gameBoard) {
    for (let x = 3; x < 6; x++) {
      for (let y = 0; y < 7; y++) {
        if (gameBoard[x][y]) {
          if (gameBoard[x][y] === gameBoard[x - 1][y] &&
            gameBoard[x][y] === gameBoard[x - 2][y] &&
            gameBoard[x][y] === gameBoard[x - 3][y]) {
            return gameBoard[x][y];
          }
        }
      }
    }
  }

  rowCheck(gameBoard) {
    for (let x = 0; x < 6; x++) {
      for (let y = 0; y < 4; y++) {
        if (gameBoard[x][y]) {
          if (gameBoard[x][y] === gameBoard[x][y + 1] &&
            gameBoard[x][y] === gameBoard[x][y + 2] &&
            gameBoard[x][y] === gameBoard[x][y + 3]) {
            return gameBoard[x][y];
          }
        }
      }
    }
  }

  diaRight(gameBoard) {
    for (let x = 3; x < 6; x++) {
      for (let y = 0; y < 4; y++) {
        if (gameBoard[x][y]) {
          if (gameBoard[x][y] === gameBoard[x - 1][y + 1] &&
            gameBoard[x][y] === gameBoard[x - 2][y + 2] &&
            gameBoard[x][y] === gameBoard[x - 3][y + 3]) {
            return gameBoard[x][y];
          }
        }
      }
    }
  }

  diaLeft(gameBoard) {
    for (let x = 3; x < 6; x++) {
      for (let y = 3; y < 7; y++) {
        if (gameBoard[x][y]) {
          if (gameBoard[x][y] === gameBoard[x - 1][y - 1] &&
            gameBoard[x][y] === gameBoard[x - 2][y - 2] &&
            gameBoard[x][y] === gameBoard[x - 3][y - 3]) {
            return gameBoard[x][y];
          }
        }
      }
    }
  }

  checkDraw(gameBoard) {
    for (let x = 0; x < 6; x++) {
      for (let y = 0; y < 7; y++) {
        if (gameBoard[x][y] === null) {
          return null;
        }
      }
    }
    return 'draw';
  }

  checkBoard(gameBoard) {
    return this.colCheck(gameBoard) || this.diaRight(gameBoard) || this.diaLeft(gameBoard) || this.rowCheck(gameBoard) || this.checkDraw(gameBoard);
  }


  render() {
    return (
      <div>
      <div className="gameBoardWrapper">
        <table>
          <thead>
          </thead>
          <tbody>
            {this.state.gameBoard.map((row, i) => (<Row key={i} row={row} play={this.play} />))}
          </tbody>
        </table>

        <p className="winner">{this.state.winner}</p>
        <div className="button" onClick={() => { this.newGame() }}>New Game</div>
      </div>
      </div>
    );
  }
};

export default App;
