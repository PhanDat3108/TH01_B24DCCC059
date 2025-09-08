import React, { useState } from "react";

function TheSinhVien({ ten, tuoi, lop }) {
  const [hienThiChiTiet, setHienThiChiTiet] = useState(false);

  return (
    <div
      style={{
        border: "1px solid #333",
        padding: 10,
        marginBottom: 10,
        width: 250,
      }}
    >
      <h3>{ten}</h3>
      <button onClick={() => setHienThiChiTiet(!hienThiChiTiet)}>
        {hienThiChiTiet ? "Ẩn chi tiết" : "Chi tiết"}
      </button>
      {hienThiChiTiet && (
        <div>
          <p>Tuổi: {tuoi}</p>
          <p>Lớp: {lop}</p>
        </div>
      )}
    </div>
  );
}

function DanhSachSinhVien() {
  const danhSachSinhVien = [
    { ten: "Phan Lê Tiến Đạt", tuoi: 20, lop: "B24DCCC059" },
    { ten: "Trần Thị B", tuoi: 21, lop: "B24DCCC060" },
    { ten: "Lê Văn C", tuoi: 22, lop: "B24DCCC061" },
  ];

  return (
    <div>
      {danhSachSinhVien.map((sv, index) => (
        <TheSinhVien
          key={index}
          ten={sv.ten}
          tuoi={sv.tuoi}
          lop={sv.lop}
        />
      ))}
    </div>
  );
}

export default DanhSachSinhVien;
