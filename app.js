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
            <Counter 
            score={props.score}
            />          
        </div>
    );
}
// using classes to create components.
class Counter extends React.Component {
    render() {
        return(
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{this.props.score}</span>
                <button className="counter-action increment"> + </button>
            </div>
        );
    }
}

// const Counter = (props) => {
//     return(
//             <div className="counter">
//                 <button className="counter-action decrement"> - </button>
//                 <span className="counter-score">{props.score}</span>
//                 <button className="counter-action increment"> + </button>
//             </div>
//     );
// }

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
                score={player.score}
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
