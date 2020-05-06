import React from "react";

function AlertInfo(props) {
  const display = () => alert(props.alertText);

  return (
    <div>
      <button onClick={display}>{props.buttonText}</button>
    </div>
  );
}

export default AlertInfo;
