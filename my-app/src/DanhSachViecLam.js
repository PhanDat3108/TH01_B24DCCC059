import React, { useState } from "react";
import "./DanhSachViecLam.css";

function CongViec({ ten }) {
  return <li>{ten}</li>;
}

function DanhSachViecLam() {
  const [congViecMoi, setCongViecMoi] = useState("");
  const [danhSachCongViec, setDanhSachCongViec] = useState([]);

  const themCongViec = () => {
    if (congViecMoi.trim() !== "") {
      setDanhSachCongViec([...danhSachCongViec, congViecMoi.trim()]);
      setCongViecMoi("");
    }
  };

  return (
  <div className="container">
    <input
      type="text"
      value={congViecMoi}
      placeholder="Nhập công việc"
      onChange={(e) => setCongViecMoi(e.target.value)}
    />
    <button onClick={themCongViec}>Thêm</button>

    <ul>
      {danhSachCongViec.map((cv, chiSo) => (
        <CongViec key={chiSo} ten={cv} />
      ))}
    </ul>
  </div>
);

}
export default DanhSachViecLam;
