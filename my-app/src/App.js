import React from "react";
import DemSoBaiTap from "./DemSoBaiTap";
import DanhSachViecLam from "./DanhSachViecLam";
import ThayDoiMauNen from "./ThayDoiMauNen";
import DongHoHienTai from "./DongHoHienTai";
import TheSV from "./TheSV";
import './App.css';

function App() {
  return (
    <div style={{ padding: 20 }}
 className="app-container">
    <h1 style={{ marginTop: "280px" }}>Bài thực hành 01</h1>

      <br />

      <div><b>Bài 1: Ứng dụng Đếm số:</b></div>
      <DemSoBaiTap />
      <br />

      <div><b>Bài 2: Danh sách công việc:</b></div>
      <DanhSachViecLam />
      <br />

      <div><b>Bài 3: Ứng dụng đổi màu nền:</b></div>
      <ThayDoiMauNen />
      <br />

      <div><b>Bài 4: Thẻ thông tin sinh viên:</b></div>
      <TheSV />
      <br />

      <div><b>Bài 5: Đồng hồ:</b></div>
      <DongHoHienTai />
    </div>
  );
}

export default App;
