import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };
    this.intervalId = null;
  }
  tick = () => {
    const { time } = this.state;
    time.setSeconds(time.getSeconds() + 1); // устанавливаем новую полученную секунду + 1 -> в об-т time
    this.setState({ time });
  };

  start = () => {
    if (!this.intervalId) {
      this.intervalId = setInterval(this.tick, 1000); // this чтобы присвоить null выше
    }
  };

  stop = () => {
    clearInterval(this.intervalId);
    this.intervalId = null; // вытаскиваем интервал, присвоив изначальное значение
  };

  reset = () => {
    this.stop();
    this.setState({
      time: new Date(0, 0, 0, 0, 0, 0, 0),
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
    const { time } = this.state;
    return (
      <article>
        <h1>{time.toLocaleTimeString('it-IT')}</h1>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
      </article>
    );
  }
}

export default StopWatch;
