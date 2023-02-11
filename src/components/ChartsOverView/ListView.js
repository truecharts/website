import React, { useState, useEffect } from "react";

import HelperUtil, {capitalizeWords }  from './HelperUtil.js';
import ListItem from './ListItem.js';
import FootCountView from './FootCountView.js';

const ListView = ({train}) => {

  const listStyles = {
    listStyleType: 'none',
    padding: '0',
    margin: '0'
  };
  
let getTrainName = capitalizeWords(train.name);
return (
  <>
  <a href={`#${getTrainName}`} id={getTrainName}><h2>{getTrainName}</h2></a><hr />
  <ul style={listStyles}>
    {train.charts.map(chart => (
        <ListItem chart={chart}/>
      ))}
  </ul>
    <FootCountView train={train}/>
  </>
 );
}

export default ListView;
