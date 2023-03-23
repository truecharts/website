import React, { useState } from "react";
import HelperUtil,{ViewOptions} from './HelperUtil.js';
import DropDown from './DropDown.js';

const SearchBar = ({ placeHolder,searchTerm,handleSearch, setSelectedOption, view}) => {

  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '16px' }}>
      
      <input
        id="search-input"
        type="text"
        placeholder={placeHolder}
        value={searchTerm}
        onChange={handleSearch}
        style={{ flexGrow: 1, height: '40px', paddingLeft: '10px' }}
      />
      <DropDown options={ViewOptions} selectedOption={view} setSelectedOption={(i)=> setSelectedOption(i)}/>
    </div>
  );
};

export default SearchBar;
