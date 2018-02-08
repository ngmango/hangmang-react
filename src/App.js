import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Snowman from './Snowman'
import './App.css';
import PastGuess from './PastGuess.js'
import Scores from './Scores.js'
// import Home from './Home.js'
import Instructions from './Instructions.js'


var words = [
	'hover',
	'barred',
	'bring',
	'router',
	'orangered',
];

function getRandomWord(){
	const index = Math.floor(Math.random()*words.length);
	return words[index];
}

var answerI = getRandomWord().split('');



class App extends Component {
  constructor(){
    super();
    this.state = {
      // page: 'home',
      rightGuesses:0,
      wrongGuesses:0,
      pastGuesses:[],
      answer: answerI,
      pastRight:0,
      pastWrong:0,
      wins:0,
      losses:0,
    }
    
    this.pastGuess = this.pastGuess.bind(this);
    this.setUpGame = this.setUpGame.bind(this);
    this.printGameState = this.printGameState.bind(this);
    this.checkGameOver = this.checkGameOver.bind(this);
  }
  
  componentWillMount(){
    this.setUpGame();
    document.addEventListener('keypress',this.pastGuess)
  }


  pastGuess(event){
    let copy1 = Array.from(this.state.pastGuesses)
    let nWrong = this.state.wrongGuesses;
    let nRight = this.state.rightGuesses;
    let textIn = event.key;

    

    if(this.state.pastGuesses.includes(textIn)){
      alert('You have guessed that already')
    } 
    else if(textIn !=="" && textIn.length === 1 && isNaN(textIn) && !this.state.pastGuesses.includes(textIn)){
      copy1.push(textIn)
        
      if(!this.state.answer.includes(textIn.toLowerCase() )){
        nWrong = nWrong + 1
      }

      else{ 
          for (let i = 0; i < this.state.answer.length; i++){
				    if (textIn === this.state.answer[i]){
					    nRight = nRight + 1
            }
          }
      }
      this.setState({
        pastGuesses : copy1,
        wrongGuesses : nWrong,
        rightGuesses : nRight,
        
      })
    }
    this.checkGameOver()
  }
      
  checkGameOver(){
    let nLoss = this.state.losses;
    let nWin = this.state.wins;
    let nWrong = this.state.wrongGuesses;
    let nRight = this.state.rightGuesses;
    // let past = Array.from(this.state.pastGames);

    if(nWrong >= 6){
      nLoss = nLoss + 1
      this.setUpGame('loss')
    }
    
    else if(nRight === this.state.answer.length){
      nWin = nWin + 1
      this.setUpGame('win')
    }
    

    this.setState({
      wins : nWin,
      losses : nLoss,
      pastRight : nRight,
      pastWrong : nWrong,

    })
  }
   
  setUpGame(final){
    if (final === 'win'){
      window.alert('You have Won!')
    }
    else if(final === 'loss'){
      window.alert('You melted the snowman!')
    }
    var con = window.confirm("Would you like to play a game?")
    if (con == true) {
      this.setState({
      // choose a new word
      answer : getRandomWord().split(''),
      // reset the total of wrong guesses
      wrongGuesses : 0,
      // empty our array of previously guessed letters
      pastGuesses : [], 
    
      rightGuesses : 0,
      })
    }else {alert("Nevermind then") }
  }


  printGameState(answer, pastGuesses){
    
    let str = "";
    
    // for each letter in the target word
    for(let i = 0; i < answer.length; i++){
      let found = false;
      // loop through the pastGuesses
      for(let j = 0; j < pastGuesses.length; j++){
        // and check each element of past guesses to see if it matches the
        if(answer[i] === pastGuesses[j]){
          found = true;
        }
      }
      if(found){
        str += answer[i];
        str += "\t";
      }
      else{
        str += "_\t";
      }
    }
    return(str)
  }

  render() {
    
    let underS = this.printGameState(this.state.answer, this.state.pastGuesses);

    return (
      
      <div className="App">
        <div className="navBar">
          <h1>Don't Melt Frosty</h1>
          
        </div>

        
        {/* <Snowman pastGuesses ={this.state.pastGuesses} 
        answer = {this.state.answer} 
        wrongGuesses = {this.state.wrongGuesses} 
        rightGuesses = {this.state.rightGuesses}
        underScore = {underS}
        /> */}

        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/scores"> Results</Link>
              <Link to="/instructions"> Instructions </Link>
            </nav>
            <Switch>
                <Route path='/scores' render={(props) => (
                  <Scores wins={this.state.wins} 
                  losses={this.state.losses}
                  pastRight= {this.state.pastRight} 
                  pastWrong = {this.state.pastWrong}
                  />
                )}/>

                <Route path='/instructions' render={(props) => (
                  <Instructions/>
                )}/>

                <Route path='/' render={(props) => (
                  <Snowman pastGuesses ={this.state.pastGuesses} 
                  answer = {this.state.answer} 
                  wrongGuesses = {this.state.wrongGuesses} 
                  rightGuesses = {this.state.rightGuesses}
                  underScore = {underS}
                  />
                )}/>
                

            </Switch>
          </div>
        </Router>
        
        
      </div>
    );
  }
}

export default App;
