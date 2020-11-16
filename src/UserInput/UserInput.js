import React from 'react';

const userInput = (props) => {
  const style = {
    backgroundColor: 'lightblue'
  };
  
  return (
    <div className="UserInput">
      <input type="text" style={style} onChange={props.changed} value={props.username} />
    </div>
  );
}

export default userInput;