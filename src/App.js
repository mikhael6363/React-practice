import { Component } from 'react';
import './App.css';
import UserList from './components/UserList';
import SelectedUserList from './components/UserList/SelectedUserList';

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: usersDB.map((u) => ({ ...u, isSelected: false })),
    }; // добавили в каждого юзера isSelected
  }
  setUsers = (newUsers) => this.setState({ users: newUsers });
  render() {
    const { users } = this.state;
    return (
      <>
        <header>
          <SelectedUserList users={users} />
        </header>
        <main>
          <UserList users={users} setUsers={this.setUsers} />
        </main>
      </>
    );
  }
}

export default App;
