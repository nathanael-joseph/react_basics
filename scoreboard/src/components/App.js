import React, { Component } from 'react';

import Header from './Header';
import Player from './Player';
import AddPlayerForm from "./AddPlayerForm";

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

  // Id counter
  prevPlayerId = 4;

  handleScoreChange = (delta, index) => {
    // console.log("Delta: " + delta + ", index: " + index);
    this.setState(prevState => (prevState.players[index].score += delta));
  }

  // handleAddPlayer = (name) => {
  //   this.setState((prevState) => {
  //     let id = prevState.players.length + 1;
  //     prevState.players.push({
  //       name: name,
  //       score: 0,
  //       id: id
  //     })
  //     return {};
  //   })
  // }

  handleAddPlayer = (name) => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      }
    }
    )
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
        <AddPlayerForm addPlayer={this.handleAddPlayer} />

      </div>
    );
  }
}

export default App;
