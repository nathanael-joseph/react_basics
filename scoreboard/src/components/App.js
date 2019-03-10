import React, { Component } from 'react';

import Header from './Header';
import Player from './Player';
class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  handleScoreChange = (delta, index) => {
    // console.log("Delta: " + delta + ", index: " + index);
    this.setState(prevState => (prevState.players[index].score += delta));
  }


  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          players={this.state.players}
        />

        {/* Players list */}
        {this.state.players.map((player, index) =>
          <Player
            index={index}
            name={player.name}
            id={player.id}
            score={player.score}
            changeScore={this.handleScoreChange}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
          />
        )}
      </div>
    );
  }
}

export default App;
