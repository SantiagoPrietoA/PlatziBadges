import React from 'react';

function Gravatar(props) {

  return (
    <img
      className={props.className}
      src={props.avatarUrl || 'https://www.gravatar.com/avatar/0000?d=identicon'}
      alt="Avatar"
    />
  );
}

export default Gravatar;