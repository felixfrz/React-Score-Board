import React from "react";
import ReactDOM from "react-dom";




const players = [
  {
    name: "Deji",
    score: 50,
    id: 1,
  },
  {
    name: "Bola",
    score: 85,
    id: 2,
  },
  {
    name: "Doyin",
    score: 95,
    id: 3,
  },
  {
    name: "Felix",
    score: 80,
    id: 4
  },
  {
    name: "Ayo",
    score: 80,
    id: 5
  },
];

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats"> Players: {props.totalPlayers}</span>
    </header>
  );
};

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">{props.name}</span>
      <Counter />
    </div>
  );
};

class Counter extends React.Component {

 state = {
   score: 0
 };

 incrementScore = () => {
   this.setState(prevState=> {
     return{
     score: prevState.score + 1
     }
   });

 }
 
 decrementScore = () =>{
   this.setState(prevState=> {
     return{
     score: prevState.score - 1
     }
   })
 }
  render(){
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
      <span className="counter-score">{this.state.score}</span>
      <button
        className="counter-action increment"
        onClick={this.incrementScore}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
  }
};

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />

      {/* player list */}
      {props.initialPlayers.map(player=>{
        return <Player name={player.name} 
                       score={player.score} key={player.id}/>
})}
      {/* <Player name="Ayodeji" score={20} />
      <Player name="Felix" score={5} />
      <Player name="Doyin" score={70} />
      <Player name="Deji" score={95} /> */}
    </div>
  );
};

ReactDOM.render(<App initialPlayers={players}/>, document.getElementById("root"));
