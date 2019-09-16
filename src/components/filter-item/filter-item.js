import React from 'react';

const FilterItem = ({filter, onChangeFilter}) => {

  const buttonsData = [
    { name: "all", label: "All"},
    { name: "active", label: "Active"},
    { name: "done", label: "Done"}
  ];


  const buttons = buttonsData.map(({name, label}) => {

    const className = (filter === name) ? "btn-info" : ""

    return(
      <button type="button" 
              className={`btn btn-secondary ${className}`} 
              key={name}
              onClick={() => onChangeFilter(name)}
              >
              {label}
      </button>
    );
  });


  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      {buttons}
    </div>
  );
};

export default FilterItem;