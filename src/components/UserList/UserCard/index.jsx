import PropTypes from 'prop-types';

const UserCard = (props) => {
  const {
    user: { id, firstName, lastName, isSelected },
    userSelector,
  } = props;
  const styles = {
    background: isSelected ? '#89ffce' : undefined,
  };

  const btnHandler = () => void userSelector(id);

  return (
    <article style={styles}>
      <p>ID: {id}</p>
      <h1>
        User Name: {firstName} {lastName}
      </h1>
      <button onClick={btnHandler}>Select this user</button>
    </article>
  );
};

export const userPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
  }).isRequired;

UserCard.propTypes = {
  user: userPropType,
  isSelected: PropTypes.func,
};

export default UserCard;
