import React from "react";

const Header = (params) => {
  return (
    <div>
      <h1> {params.title} </h1>
      {params.subtitle && <h2> {params.subtitle} </h2>}
    </div>
  );
}

Header.defaultProps = {
  title: "Indecision"
};

export default Header;
