import React, { useState, useEffect } from "react";
import "../../css/grid.css";

const GridItemDialog = ({selectedChart,onClick}) => {

    return (
      <div className="dialog-background">
        <div className="card card-dialog">
        <div className="card-header text-center" style={{ padding: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <h3><a href={selectedChart.link} target="_blank" rel="noopener noreferrer">{selectedChart.name}</a></h3>
        </div>
          <div className="card-body" style={{ padding: "1rem" }}>
            <p class="description">{selectedChart.description}</p>
            <p>Chart Version: <strong>{selectedChart.version}</strong></p>
          </div>
          <div className="text-center" style={{ padding: "1rem", display: "flex", justifyContent: "flex-end" }}>
            <button className="btn btn-primary" onClick={onClick}>
              Close
              </button>
              </div>
        </div>
      </div>
     );
    }
    
    export default GridItemDialog;
