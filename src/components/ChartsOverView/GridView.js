import React, { useState, useEffect } from "react";

import HelperUtil, {capitalizeWords }  from './HelperUtil.js';

import "../../css/grid.css";
import GridItem from './GridItem.js';
import GridItemDialog from './GridItemDialog.js';
import FootCountView from './FootCountView.js';

const GridView = ({train}) => {
    const [selectedChart, setSelectedChart] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
  
    const handleCloseDialog = () => {
      setSelectedChart(null);
      setIsDialogOpen(false);
    };
  
    const handleOpenDialog = chart => {
      setSelectedChart(chart);
      setIsDialogOpen(true);
    };
    
let getTrainName = capitalizeWords(train.name);

return (
        <> 
        <a href={`#${getTrainName}`} id={getTrainName}><h2>{getTrainName}</h2></a><hr />
        <div className="grid">
        {train.charts.map(chart => (
        <GridItem chart={chart} onClick={()=> handleOpenDialog(chart)}/>                
        ))}
        {isDialogOpen && selectedChart && (
            <GridItemDialog selectedChart={selectedChart} onClick={()=> handleCloseDialog()}/>
        )}
        </div>
        <FootCountView train={train}/>
        </> 
     );
    }
    
    export default GridView;