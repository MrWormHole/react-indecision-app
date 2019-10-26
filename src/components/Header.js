import React from "react";

const Header = (params) => {
  return (
    <div className="header">
      <div className="container">
      <h1 className="header__title"> {params.title} </h1>
      {params.subtitle && <h2 className="header__subtitle"> {params.subtitle} </h2>}
      </div>
    </div>
  );
}

Header.defaultProps = {
  title: "Indecision"
};

export default Header;
