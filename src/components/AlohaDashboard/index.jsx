import { Component } from 'react';
import AlohaSortedList from '../AlohaSortedList';

class AlohaDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Snow',
        },
        {
          id: 2,
          firstName: 'Elon',
          lastName: 'Musk',
        },
        {
          id: 3,
          firstName: 'Benjamin',
          lastName: 'Franklin',
        },
        {
          id: 4,
          firstName: 'Linda',
          lastName: 'Crowd',
        },
        {
          id: 5,
          firstName: 'Anna',
          lastName: 'Romanova',
        },
      ],
    };
  }
  setUsers = (users) => this.setState({ users });
  render() {
    const { users } = this.state;
    return (
      <>
        <AlohaSortedList users={users} setUsers={this.setUsers} />
      </>
    );
  }
}

export default AlohaDashboard;
