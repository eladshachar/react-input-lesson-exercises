import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }

    setName = (event) => {
        this.setState({name: event.target.value})
    }

    setAge = (event) => {
        this.setState({age: event.target.value})
    }

    alertUser = () => {
        alert(`Hi ${this.state.name}, you are ${this.state.age} years old`)
    }

    render() {
        return (
            <div>
                <input id="name-input" onChange={this.setName}/>
                <input id="age-input" onChange={this.setAge}/>
                <button onClick={this.alertUser}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;