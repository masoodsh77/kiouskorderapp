import React from "react";

function Cards({icon , title , info , No}) {
  return (
    <div className="card w-100">
      {icon}
      <div className="title">{title}</div>
      <div className="info">
        {info} <span>{No}</span>
      </div>
    </div>
  );
}

export default Cards;
