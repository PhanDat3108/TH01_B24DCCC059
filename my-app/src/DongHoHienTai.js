import React, { useState, useEffect } from "react";
import "./DongHoHienTai.css";

function HienThiThoiGian({ thoiGian }) {
  return <h2 className="thoi-gian">{thoiGian}</h2>;
}

function DongHoHienTai() {
  const [thoiGian, setThoiGian] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const dongHo = setInterval(() => {
      setThoiGian(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(dongHo);
  }, []);

  return (
    <div className="dong-ho-container">
      <HienThiThoiGian thoiGian={thoiGian} />
    </div>
  );
}

export default DongHoHienTai;
