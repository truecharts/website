import React, { useState, useEffect } from "react";

const EmptyView = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2 style={{ margin: 0, color: '#b71c1c' }}>Whoops!</h2>
      <p style={{ margin: '1rem 0 0 0' }}>No charts left to filter out!</p>
      <br/>
    </div>
  )
};

export default EmptyView;