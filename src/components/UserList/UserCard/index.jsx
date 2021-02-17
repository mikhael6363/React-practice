const UserCard = (props) => {
  const {
    user: { id, firstName, lastName, isSelected },
    userSelector,
  } = props;
  const styles = {
    outline: isSelected ? '3px solid #000000' : undefined,
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

export default UserCard;
