import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.intervalId = null;
  }
  tick = () => this.setState({ count: this.state.count + 1 });

  start = () => {
    if (!this.intervalId) {
      this.intervalId = setInterval(this.tick, 1000); // this чтобы присвоить null выше
    };

  };

  stop = () => {
    clearInterval(this.intervalId);
    this.intervalId = null; // вытаскиваем интервал, присвоив изначальное значение
  };

  reset = () => {
    this.stop();
    this.setState({
      count: 0,
    });
  };

  componentDidMount() {
    this.start();
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    this.stop();
  }

  render() {
    const { count } = this.state;
    return (
      <article>
        <h1>{count}</h1>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
      </article>
    );
  }
}

export default StopWatch;
