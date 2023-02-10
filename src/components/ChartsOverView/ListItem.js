import React, { useState, useEffect } from "react";

const cardStyles = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '20px',
  margin: '10px',
  width: '100%'
};

const headerStyles = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px'
};

const titleStyles = {
  margin: '0',
  flexGrow: '1'
};

const iconStyles = {
  fontSize: '24px',
  marginLeft: '16px',
  width: "48px",
  height:"48px"
};

const descriptionStyles = {
  margin: '0',
  fontSize: '16px'
};

const sourceStyles = {
  fontSize: '12px',
  color: '#999',
  margin: '0'
  };
  
  const appVersionStyles = {
  fontSize: '12px',
  color: '#999',
  margin: '0',
  };
  
const ListItem = ({ chart }) => (
  <div style={cardStyles}>
  <div style={headerStyles}>
  <h3 style={titleStyles}><a href={chart.link} target="_blank" rel="noopener noreferrer">{chart.name}</a></h3>
  <img src={chart.icon} alt={chart.name} style={iconStyles} />
  </div>
  <p style={descriptionStyles}>{chart.description}</p>
  <span style={appVersionStyles}>Chart Version: <strong>{chart.version}</strong></span>
  </div>
  );
  export default ListItem;