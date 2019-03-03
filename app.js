let players = [
    {
        id: 1,
        name: "Guil",
        score: 50
      },
      {
        id: 2,
        name: "Treasure",
        score: 85
      },
      {
        id: 3,
        name: "Ashley",
        score: 95
      },
      {
        id: 4,
        name: "James",
        score: 80
      }
];

// component as funtion
function Header (props) {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: {props.totalyPlayers}</span>
        </header>
    );
}
// component as arrow function.
const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.playerName}
            </span>  
            <Counter />          
        </div>
    );
}
// using classes to create components.
class Counter extends React.Component {
   
    // constructor(){
    //     super()
    //     this.state = {
    //         score : 0
    //     }
    // }
    // can be simplified to :
    state = { score: 0 }
    // but this is not supported in all browsers. 

    // use arrow function to bind automatically.
    incrementScore = () => {
        this.setState( previousState => ({
            score: previousState.score + 1
            }));
    }
    
    // bind using javascipt's bind method.
    decrementScore() {
        this.setState( previousState => ({           
                score: previousState.score -1
            }));   
    }

    render() {
        return(
            <div className="counter">
                {/* Binding is performed in the onClick event handler definition */}
                <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        );
    }
}


const App = (props) => {
    return (
        <div className="scoreboard">
            <Header 
            title="My Scoreboard" 
            totalyPlayers={props.initialPlayers.length}/>
            {/* Players list */}
            {props.initialPlayers.map(
                player => 
                <Player 
                playerName={player.name}
                key={player.id.toString()}
            />
            )} 
           
        </div>
    );
}
ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById("root")
    );
