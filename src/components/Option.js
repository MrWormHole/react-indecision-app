import React from "react";

const Option = (params) => {
  return (
    <div className="option">
      <p className="option--text">{params.count}. {params.optionText}</p>
      <button onClick={(e) => {params.handleDeleteOption(params.optionText)}}
              className="small-button small-button--remove"> 
        Remove 
      </button>
    </div>
  );
};

export default Option;
