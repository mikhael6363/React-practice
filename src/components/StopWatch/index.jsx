import React, { Component } from 'react';
import styles from './StopWatch.module.scss';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };
    this.timeOutID = null;
  }
  tick = () =>
    this.setState((state, props) => {
      const { time } = state;
      const timeCopy = new Date(time.getTime());
      timeCopy.setSeconds(time.getSeconds() + 1);
      return {
        time: timeCopy,
      };
    });

  start = () => this.setState({ isRunning: true });

  stop = () => this.setState({ isRunning: false });

  clear = () => {
    clearTimeout(this.timeOutID);
    this.timeOutID = null;
  };

  reset = () => {
    this.clear();
    this.setState({
      isRunning: false,
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    });
  };

  componentDidMount() {
    this.start();
  }

  componentDidUpdate() {
    const { isRunning } = this.state;
    if (isRunning) {
      // если таймер запущен, запускаем tick
      this.timeOutID = setTimeout(this.tick, 1000);
    }
  }

  componentWillUnmount() {
    this.clear();
  }

  render() {
    const { time, isRunning } = this.state;
    return (
      <article className={styles.container}>
        <h1>{time.toLocaleTimeString('it-IT')}</h1>
        {isRunning ? ( <button className={`${styles.btn} ${styles.btnStop}`} onClick={this.stop}>Stop</button> ) : ( <button className={`${styles.btn} ${styles.btnStart}`} onClick={this.start}>Start</button> )}

        <button className={styles.btn} onClick={this.reset}>Reset</button>
      </article>
    );
  }
}

export default StopWatch;
