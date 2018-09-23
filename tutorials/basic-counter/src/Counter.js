import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    counter: 0
  }

  changeCount = count => {
    this.setState({ counter: count });
  }

  handleIncrement = () => {
    this.changeCount(this.state.counter + 1);
  }

  handleDecrement = () => {
    this.changeCount(this.state.counter - 1);
  }

  reset = () => {
    this.changeCount(0);
  }

  render() {
    const { counter } = this.state;

    return (
      <section className="Counter">
        <h1>Count: {counter}</h1>
        <button onClick={this.handleIncrement} className="full-width">Increment</button>
        <button onClick={this.handleDecrement} className="full-width">Decrement</button>
        <button onClick={this.reset} className="full-width">Reset</button>
      </section>
    );
  }
}
