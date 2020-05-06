import React from "react";

function AlertInfo() {
  const display = () => alert("Kliknięcie");

  return (
    <div>
      <button onClick={display}>Klik alert</button>
    </div>
  );
}

export default AlertInfo;
