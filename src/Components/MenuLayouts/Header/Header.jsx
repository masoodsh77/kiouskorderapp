import React from "react";
import './Header.css'
function Header({title}) {
  return (
    <div className="w-100">
      <div className="resturantsHeader w-100 text-center">
        {title}
      </div>
    </div>
  );
}

export default Header;
