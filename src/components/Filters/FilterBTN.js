import React from 'react';

const FilterBTN = ({ name, index, items, task, setPageNumber }) => {
  const radioStyle = {
    display: 'none', // hides the radio button
  };

  const labelStyle = {
    cursor: 'pointer', // adds pointer cursor on hover
    
  };

  return (
    <div>
      <div className="form-check">
        <input 
          onClick={() => {
            setPageNumber(1);
            task(items);
          }}
          style={radioStyle}
          className="form-check-input" 
          type="radio" 
          name={name} 
          id={`${name}-${index}`} 
        />
        <label 
          style={labelStyle}
          className="btn btn-outline-success" 
          htmlFor={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
