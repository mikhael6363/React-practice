const UserCard = (props) => {
  const { user: { id, firstName, lastName }, } = props;
  return (
    <article>
      <p>ID: {id}</p>
      <h1> User Name: {firstName} {lastName} </h1>
    </article>
  );
};

export default UserCard;
