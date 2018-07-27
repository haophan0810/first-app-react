import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      check: true

    };
  }

  turnPlay(){
  console.log('this :', this);
    this.setState({
      check:false
    })
    console.log('this.state.turn :', this.state.check);
    if(this.state.check){
      
      this.setState({
        value:'X',
        check:false

      });
     
      console.log('this.state.turn :', this.state.check);
    }else{
      this.setState({
        value:'O',
        check : true,

      })
      console.log('object');
    }
  }

    render() {
      return (
        <button className="square" onClick={this.turnPlay.bind(this)} >
          {console.log('this.props.value :', this.state.value)}
          { this.state.value }
          {/* TODO */}
        </button>
      );
    }
  }
  
 

  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
        
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  