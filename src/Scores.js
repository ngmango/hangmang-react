import React from 'react';
import App from './App.js';

class Scores extends React.Component{
    render(){
    return(
        <div> 
        {this.props.pastWrong} Wrong Guesses Last Game
         --- {this.props.pastRight} Right Guesses Last Game 
         --- {this.props.wins} Total Games Won
         --- {this.props.losses} Total Games Lost
        </div>


    )}
}
export default Scores;