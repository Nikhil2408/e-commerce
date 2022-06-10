import React from 'react';

function Wrapper(props) {
  const style = {
    backgroundColor: props.bgColor,
  };
  return (
    <div className='wrapper-container' style={style}>
      <div className='wrapper'>{props.children}</div>
    </div>
  );
}

export default Wrapper;
