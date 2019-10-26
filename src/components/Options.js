import React from "react";
import Option from "./Option";

const Options = (params) => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title"> Your Options </h3>
        <button className="small-button small-button--remove"
                onClick={params.handleDeleteOptions}> 
                Remove All 
        </button>
      </div>
      {params.options.length == 0 && <p className="widget-message"> Please add an option to get started! </p>}
      {
        params.options.map((option, index) => <Option key={params.options.indexOf(option)}
                                        optionText={option}
                                        count={index + 1}
                                        handleDeleteOption={params.handleDeleteOption}/>)
      }
    </div>
  );
};

export default Options;
