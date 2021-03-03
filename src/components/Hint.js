import React from "react";

// rafce
const Hint = ({ selectedHint }) => {
  return (
    <div className="hint">
      <h3>Hint : (defn)</h3>
      <p>{selectedHint}</p>
    </div>
  );
};

export default Hint;
