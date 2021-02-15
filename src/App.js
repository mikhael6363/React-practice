import { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    const { count } = this.state;
    const countCopy = JSON.parse(JSON.stringify(count));
    this.setState({
      count: countCopy + 1,
    });
  };
  decrement = () => {
    const { count } = this.state;
    const countCopy = JSON.parse(JSON.stringify(count));
    if (countCopy > 0) {
      this.setState({
        count: countCopy - 1,
      });
    }
  };
  render() {
    const { count } = this.state;
    return (
      <>
        <h1>{count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </>
    );
  }
}

export default Counter;
