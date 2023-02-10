import React, { useState } from "react";
import HelperUtil,{capitalizeWords} from './HelperUtil.js';

const CheckboxList = ({ checkboxData,handleChange,activeCheckboxes }) => {
  
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {checkboxData.map((checkbox) => (
        <div key={checkbox.name} style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
          <input
            type="checkbox"
            id={checkbox.name}
            checked={activeCheckboxes.includes(checkbox.name)}
            onChange={() => handleChange(checkbox)}
          />
          <label htmlFor={checkbox.name}>{capitalizeWords(checkbox.name)}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxList;