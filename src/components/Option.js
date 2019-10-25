import React from "react";

const Option = (params) => {
  return (
    <div>
      {params .optionText}
      <button onClick={(e) => {
        params.handleDeleteOption(params.optionText)
      }}> Remove </button>
    </div>
  );
};

export default Option;
