import React from 'react';

const SelectedUserList = (props) => {
  const { users } = props;
  const selectedUsers = users.filter(({ isSelected }) => isSelected);
  return (
    <div>
      {selectedUsers.map(({ firstName, lastName, id }) => (
        <span>
          {firstName} {lastName}: {id}
        </span>
      ))}
    </div>
  );
};

export default SelectedUserList;
