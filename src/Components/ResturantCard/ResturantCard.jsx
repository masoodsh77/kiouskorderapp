import React from "react";
import "./ResturantCard.css";

function ResturantCard({item, Logo}) {
  return (
    <div
      key={item.id}
      className="resturantsCard col-3 d-flex justify-content-center align-items-center flex-wrap m-1"
    >
      <img src={Logo} alt="" width="95rem" />
      <div className="w-100 text-center">{item.name}</div>
    </div>
  );
}
export default ResturantCard;
