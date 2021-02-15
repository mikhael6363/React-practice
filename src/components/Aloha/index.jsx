import { Component } from 'react';

class Aloha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGreeting: true,
    };
  }
  btnHandler = () => {
    const { isGreeting } = this.state;
    this.setState({ isGreeting: !isGreeting });
  };
  render() {
    const { name, img } = this.props;
    const { isGreeting } = this.state;
    return (
      <>
        <h1>{isGreeting ? 'Hello' : 'Goodbye'}, {name}</h1>
        <img src={img} />
        <button onClick={this.btnHandler}>Switch</button>
      </>
    );
  }
}
export default Aloha;