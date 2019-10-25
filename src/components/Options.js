import React from "react";
import Option from "./Option";

const Options = (params) => {
  return (
    <div>
      <button onClick={params.handleDeleteOptions}> Remove All </button>
      {params.options.length == 0 && <p> Please add an option to get started! </p>}
      <h5> {params.options.length} </h5>
      {
        params.options.map((option) => <Option key={params.options.indexOf(option)}
                                        optionText={option}
                                        handleDeleteOption={params.handleDeleteOption}/>)
      }
    </div>
  );
};

export default Options;
