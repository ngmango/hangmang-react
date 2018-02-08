import React, { Component } from 'react'
import './App.css'
import App from './App.js'


class Snowman extends Component {
    constructor(){
        super()
    //     this.state =({
    //         word : '',
    //         nWrong:0,
    //         nRight:0,
    //         guesses: [],
    //     })
    // }
    
    render() {
        var wrongGuess = this.props.wrongGuesses;
        return (
            <div>
                <div className='hangmanContainer'>
                    <div className="hat" style = {(wrongGuess > 4)? {display : 'none'} : {display : 'block'}}>
                        <div className="hat__brim" style = {(wrongGuess > 4)? {display : 'none'} : {display : 'block'}} ></div>
                    </div>
                    <div className='head' style = {(wrongGuess > 5)? {display : 'none'} : {display : 'block'}}>
                        <div className="head__eye head__eye--left"></div>
                        <div className="head__eye head__eye--right"></div>    
                        <div className="head__nose"></div>
                    </div> 
                    <div className="hat" style = {(wrongGuess > 4)? {display : 'none'} : {display : 'block'}}></div>
                    <div className='body--top' style = {(wrongGuess > 3)? {display : 'none'} : {display : 'block'}} >
                        <div className="body__button body__button--top"></div>
                        <div className="body__button body__button--middle"></div>
                        <div className="body__button body__button--bottom"></div>
                    </div>
                    <div className="body--bottom" style = {(wrongGuess > 0)? {display : 'none'} : {display : 'block'}}>

                    </div> 
                    
                    <div className='leftArm' style = {(wrongGuess > 1)? {display : 'none'} : {display : 'block'}}></div>
                    <div className='rightArm' style = {(wrongGuess > 2)? {display : 'none'} : {display : 'block'}}></div>
                </div>
                <div className='gameContainer'>
                    {/* <h1>Your Guess is:</h1> */}
                    <h1>Your word is: {this.props.underScore}</h1>
                    <h2>Your previous guesses are: {this.props.pastGuesses + ''}</h2>
                    <h2>You have guessed wrong {this.props.wrongGuesses} out of 6 times</h2>
                    <h2>You have guessed {this.props.rightGuesses} out of {this.props.answer.length} letters correctly</h2>
                </div>
            </div>
        )
    }
}

export default Snowman