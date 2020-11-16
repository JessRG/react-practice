import React from 'react';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Hello {props.username}!</p>
      <p>This is the second paragraph!</p>
    </div>
  );
}

export default userOutput;