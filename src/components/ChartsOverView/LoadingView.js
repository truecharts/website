import React, { useState, useEffect } from "react";

const LoadingView = ({src,msg}) => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img src={src} alt="loading" />
      <p style={{ marginTop: '10px' }}>{msg}</p>
    </div>
  );
export default LoadingView;