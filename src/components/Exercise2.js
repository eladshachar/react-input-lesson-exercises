import React, { Component } from 'react';

class Exercise2 extends Component {

constructor() {
    super()
    this.state = {
        name: "",
        fruit: ""
    }
}

changeName = (event) => {
    this.setState({name: event.target.value})
}

changeFruit = async (event) => {
    await this.setState({fruit: event.target.value})

    console.log(`${this.state.name} selected ${this.state.fruit}`)
}

render() {
    return (
        <div>
            <input id="name-input" onChange={this.changeName}/>
            <select id="select-input" value={this.state.fruit} onChange={this.changeFruit}>
                <option>banana</option>
                <option>apple</option>
                <option>orange</option>
            </select>
        </div>
    );
}
}

export default Exercise2;