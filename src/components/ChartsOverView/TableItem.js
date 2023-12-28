import React, { useState, useEffect } from "react";
import "./table.module.css";
import HelperUtil, { isLink, getSourceName } from "./HelperUtil.js";

const TableItem = ({ chart }) => {
  return (
    <tr>
      <td>
        <img
          className="table-item"
          src={chart.icon}
          alt={chart.name}
          width="25"
          height="25"
        />
        &nbsp;
        <a href={chart.link} target="_blank" rel="noopener noreferrer">
          {chart.name}
        </a>
      </td>
      <td style={{ textAlign: "center" }}>
        <strong>{chart.version}</strong>
      </td>
      <td>{chart.description}</td>
    </tr>
  );
};

export default TableItem;
