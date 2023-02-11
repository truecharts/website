import React, { useState, useEffect } from "react";
import "../../css/grid.css";

const GridItem = ({chart,onClick}) => {

    return (
        <img className="grid-item" onClick={onClick} src={chart.icon} alt={chart.name} style={{ width: "128px", height: "128px", objectFit: "contain" }} />   
     );
    }
export default GridItem;