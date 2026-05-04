import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "5px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
        this.moveBall = this.moveBall.bind(this)
    };

    buttonClickHandler() {
        this.setState({renderBall: true})
   }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button className="start" onClick={this.buttonClickHandler} >Start</button>
		}
    }
    moveBall(e) {
        if (e.key === 'ArrowRight') {
            this.setState(prev => ({
                posi: prev.posi + 5,
                ballPosition: { left: `${prev.posi + 5}px` }
            }));
        }
    }
    // bind ArrowRight keydown event
    componentDidMount() {
        window.addEventListener('keydown', this.moveBall)
    }
    componentWillUnmount(){
        window.removeEventListener('keydown', this.moveBall)
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
