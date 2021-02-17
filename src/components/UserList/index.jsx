import { Component } from 'react';
import UserCard from './UserCard';

const usersDB = [
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
];

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: usersDB.map((u) => ({ ...u, isSelected: false })),
    }; // добавили в каждого юзера isSelected
  }
  userSelector = (id) => {
    const { users } = this.state;
    this.setState({
      users: [...users].map((user) => ({
        ...user,
        isSelected: user.id === id ? !user.isSelected : user.isSelected,
      })), // если у юзера совпадает id, -> !isSelected, в ином случае isSelected
    });
  };
  mapUser = (user) => (
    <UserCard key={user.id} user={user} userSelector={this.userSelector} />
  );
  render() {
    const { users } = this.state;
    return (
      <section>
        <h1>User List from Data Base</h1>
        {users.map(this.mapUser)}
      </section>
    );
  }
}

export default UserList;
