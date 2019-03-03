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
const Counter = () => {
    return(
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">35</span>
                <button className="counter-action increment"> + </button>
            </div>
    );
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header title="My Scoreboard" totalyPlayers={1}/>
            {/* Players list */}
            <Player playerName="Nathanael"/>
        </div>
    );
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
    );
