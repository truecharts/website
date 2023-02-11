import React, { useState } from "react";
import HelperUtil,{ViewOptions} from './HelperUtil.js';
import DropDown from './DropDown.js';

const SearchBar = ({ placeHolder,searchTerm,handleSearch, setSelectedOption, view}) => {

  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '16px' }}>
      <img
        src={require('@site/static/img/1024.png').default}
        alt="TrueCharts logo"
        width="24"
        height="24"
        style={{ marginRight: '0.5em' }}
      />
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
