import { Component } from 'react';

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
      users: usersDB,
    };
  }
  mapUser = (user) => <UserCard key={user.id} user={user} />;
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
