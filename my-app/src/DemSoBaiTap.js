import React, { useState } from "react";
import "./DemSoBaiTap.css";

function DemSoBaiTap() {
  const [dem, setCount] = useState(0);

  return (
    <div className="container">
      <button className="button" onClick={() => setCount(dem - 1)}>-</button>
      <button className="button" onClick={() => setCount(dem + 1)}>+</button>
      <br />
      <span className="value">Giá trị hiện tại: {dem}</span>
    </div>
  );
}

export default DemSoBaiTap;
