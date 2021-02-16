import { Component } from 'react';

class Aloha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGreeting: true,
    };
  }
  switchHandler = () => {
    const { isGreeting } = this.state;
    this.setState({ isGreeting: !isGreeting });
  };

  deleteHandler = () => {
    const { deleteUser, id } = this.props;
    deleteUser(id);
  };
  render() {
    const { name } = this.props;
    const { isGreeting } = this.state;
    return (
      <>
        <h1>
          {isGreeting ? 'Hello' : 'Goodbye'}, {name}
        </h1>
        <button onClick={this.switchHandler}>Switch</button>
        <button onClick={this.deleteHandler}>X</button>
      </>
    );
  }
}

export default Aloha;
