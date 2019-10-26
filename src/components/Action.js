import React from "react";

const Action = (params) => {
  return (
    <div>
      <button className="big-button"
              onClick={params.handleRandomPick}
              disabled={!params.hasOptions}>
              What Should I Do?
      </button>
    </div>
  );
};

export default Action;
