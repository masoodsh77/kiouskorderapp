import React from "react";
import "../DashHome.css";
import { FaUtensils, FaReceipt, FaUserTag, FaDollarSign } from "react-icons/fa";

function DashHome() {
  return (
    <div className="text-center">
      <div className="row p-0 m-0">
        <div className="col-3">
          <div className="card w-100">
            <FaUtensils className="dashHomeCardIcon" />
            <div className="title">رستوران ها</div>
            <div className="info">25 <span>غرفه فعال</span></div>
          </div>
        </div>
        <div className="col-3">
          <div className="card w-100">
            <FaReceipt className="dashHomeCardIcon" />
            <div className="title">سفارش ها</div>
            <div className="info">1520 <span>فاکتور</span></div>
          </div>
        </div>
        <div className="col-3">
          <div className="card w-100">
            <FaUserTag className="dashHomeCardIcon" />
            <div className="title">مشتری ها</div>
            <div className="info">2000 <span>نفر</span></div>
          </div>
        </div>
        <div className="col-3">
          <div className="card w-100">
            <FaDollarSign className="dashHomeCardIcon" />
            <div className="title">درآمد ها</div>
            <div className="info">300 <span>میلیون تومان</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashHome;
