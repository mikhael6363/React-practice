import { Component } from 'react';
import UserCard from './UserCard';

class UserList extends Component {
  userSelector = (id) => {
    const { users, setUsers } = this.props;
    setUsers(
      [...users].map((user) => ({
        ...user,
        isSelected: user.id === id ? !user.isSelected : user.isSelected,
      }))
    ); // если у юзера совпадает id, -> !isSelected, в ином случае isSelected
  };
  mapUser = (user) => (
    <UserCard key={user.id} user={user} userSelector={this.userSelector} />
  );
  render() {
    const { users } = this.props;
    return (
      <section>
        <h1>User List from Data Base</h1>
        {users.map(this.mapUser)}
      </section>
    );
  }
}

export default UserList;
