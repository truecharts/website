import React, { useState, useEffect } from "react";

const EmptyView = ({title,msg}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2 style={{ margin: 0, color: '#b71c1c' }}>{title}</h2>
      <p style={{ margin: '1rem 0 0 0' }}>{msg}</p>
      <br/>
    </div>
  )
};

export default EmptyView;