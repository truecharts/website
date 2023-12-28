import React, { useState, useEffect } from "react";
import "./table.module.css";
import HelperUtil, { capitalizeWords } from "./HelperUtil.js";

import TableItem from "./TableItem.js";
import FootCountView from "./FootCountView.js";

const TableView = ({ train }) => {
  let getTrainName = capitalizeWords(train.name);

  return (
    <>
      <a href={`#${getTrainName}`} id={getTrainName}>
        <h2>{getTrainName}</h2>
      </a>
      <hr />
      <table className="full-width-table">
        <thead>
          <tr>
            <th>App</th>
            <th>Chart Version</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {train.charts.map((chart) => (
            <TableItem chart={chart} />
          ))}
        </tbody>
        <FootCountView train={train} />
      </table>
    </>
  );
};

export default TableView;
