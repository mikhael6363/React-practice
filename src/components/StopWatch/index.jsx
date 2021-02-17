import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.intervalId = null;
    console.log('constructor');
  }

  start = () => {
    this.intervalId = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  };

  componentDidMount() { // After first render
    console.log('componentDidMount');
    this.start();
  }

  componentDidUpdate() { // After render except 1st
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.intervalId);
  }

  render() {
    console.log('render');

    const { count } = this.state;
    return (
      <article>
        <h1>{count}</h1>
        <button onClick={this.start}>Start</button>
      </article>
    );
  }
}

export default StopWatch;
