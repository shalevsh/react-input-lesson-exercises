import React, { Component } from "react";

class Exercise1 extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: "",
        };
    }
    updateName = (event) => {
        this.setState({ name: event.target.value });
    };

    updateAge = (event) => {
        this.setState({ age: event.target.value });
    };
    alertText = () => {
        alert(
            `come in ${this.state.name} you’re ${this.state.age} - that’s good enough`
        );
    };
    //Come in Haliax, you’re 40 - that’s good enough
    render() {
        return (
            <div>
                <input id="name-input" onChange={this.updateName} />
                <input id="age-input" onChange={this.updateAge} />
                <button onClick={this.alertText}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;
