import React from 'react';

class PastGuess extends React.Component{
    method=(e)=>{
        e.preventDefault();

        this.props.pastGuess(this._inputElement.value)
        this._inputElement.value = ""
    }
    render(){
        return(
            <form onSubmit={this.method}>
                <div className="input-group">
                <input className="form-control" ref={(a) => this._inputElement = a} placeholder="Type Guess Here" />
                <button type="submit" >Submit </button>
                
                </div>
            </form>
        )
    }
}
export default PastGuess;