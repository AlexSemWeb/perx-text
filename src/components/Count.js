import React from "react";

const Count = ({ count, minus, plus }) => {
  return (
    <div className="count--container">
      <div className="count count__minus" onClick={minus}>
        -
      </div>
      <div className="count">{count}</div>
      <div className="count count__plus" onClick={plus}>
        +
      </div>
    </div>
  );
};

export default Count;
