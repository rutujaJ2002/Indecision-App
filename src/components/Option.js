import React from 'react';

const Option = (props) => {
  return (
    <div className='opt'>
      { props.optionText && <p>{props.optionText}</p>}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Option;
