import React, { useState, useEffect } from "react";

const Dropdown = ({options,selectedOption,setSelectedOption}) => {
   
  return (
    <div style={{ marginLeft: '16px' }}>
      <select
        value={selectedOption}
        onChange={e => setSelectedOption(e.target.value)}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;