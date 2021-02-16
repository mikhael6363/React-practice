import Aloha from '../Aloha';

function AlohaList(props) {
  const { deleteUser } = props;
  const mapAloha = ({ firstName, lastName, id }) => (
    <Aloha
      key={id}
      id={id}
      name={`${firstName} ${lastName}`}
      deleteUser={deleteUser}
    />
  );
  const { users } = props;
  return <section>{users.map(mapAloha)}</section>;
}

export default AlohaList;
