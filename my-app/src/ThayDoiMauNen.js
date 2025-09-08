import React, { useState } from "react";

// Component Hiển thị hộp màu
function HinhVuong({ mau }) {
  const style = {
    width: 200,
    height: 100,
    backgroundColor: mau,
    marginTop: 10,
  };
  return <div style={style}></div>;
}

function ThayDoiMauNen() {
  const mauSac = ["red", "green", "blue", "yellow"];
  const [mau, setMau] = useState(mauSac[0]);

  return (
    <div>
      {mauSac.map((m) => (
        <button key={m} onClick={() => setMau(m)} style={{ marginRight: 5 }}>
          {m}
        </button>
      ))}

      <HinhVuong mau={mau} />
    </div>
  );
}

export default ThayDoiMauNen;
