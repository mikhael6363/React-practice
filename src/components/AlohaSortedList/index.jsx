import { Component } from 'react';
import AlohaList from '../AlohaList';

class AlohaSortedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDirectSort: true,
    };
  }
  sortUsers = () => {
    const { isDirectSort } = this.state;
    const { users, setUsers } = this.props;
    const usersCopy = JSON.parse(JSON.stringify(users));
    this.setState({
      isDirectSort: !isDirectSort,
    });
    setUsers(
      usersCopy.sort((a, b) => (isDirectSort ? b.id - a.id : a.id - b.id))
    );
  };
  render() {
    const { isDirectSort } = this.state;
    const { users, deleteUser } = this.props;
    return (
      <>
        <span>{isDirectSort ? 'Прямой' : 'Обратный'} порядок сортировки</span>
        <AlohaList users={users} deleteUser={deleteUser} />
        <button onClick={this.sortUsers}>SORT</button>
      </>
    );
  }
}

export default AlohaSortedList;
