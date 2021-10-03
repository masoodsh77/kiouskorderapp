import React from "react";
import "./Resturants.css";
import Logo from '../../../assets/img/logo.png'
function Resturants() {
  return (
    <div className="d-flex justify-content-center resturants flex-wrap">
      <div className="resturantsHeader w-100 text-center">
        رستوران مورد نظر خود را انتخاب کنید
      </div>
      <div className="resturantsCards w-100">
        <div className="row p-2 s-flex justify-content-center">
          <div className="resturantsCard col-3 d-flex justify-content-center align-items-center flex-wrap m-1">
            <img src={Logo} alt="" width="95rem"/>
            <div className="w-100 text-center">نام رستوران</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resturants;
