import React from 'react';
import Option from './Option';

const Options = (props) => {
  return (
    <div className='options'>
      <div className='opt-header'>
        <h2>Your Options</h2>
        <button className='remove-all' onClick={props.handleDeleteOptions}>Remove All</button>
      </div>
      <hr></hr>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
};

export default Options;
