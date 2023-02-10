import React, { useState, useEffect } from "react";

const LoadingView = () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img src="/img/loading-aesthetic.gif" alt="Loading" />
      <p style={{ marginTop: '10px' }}>Loading...</p>
    </div>
  );
export default LoadingView;