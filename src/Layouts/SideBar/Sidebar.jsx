import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

function Sidebar(props) {
  return (
    <div className="h-100 sidebar  flex-wrap">
      <div className="LogoPosition d-flex justify-content-center align-items-center">
        <img src={logo} width="40px" className="logo" />
        <span className="brandName">کای دای</span>
      </div>
      <div className="Menu">
        <ul>
          <Link to="/dashboard" activeClassName="activeMenu">
            <li>داشبورد</li>
          </Link>
          <Link to="/dashboard/products" activeClassName="activeMenu">
            <li>مدیریت محصولات</li>
          </Link>
          <li>مدیریت فروشگاه ها</li>
          <li>مدیریت محصولات</li>
          <li>مدیریت ایستگاه ها</li>
          <Link to="/dashboard/reports" activeClassName="activeMenu">
            <li> گزارشات</li>
          </Link>
        </ul>
      </div>
      <div className="support">
        <p>
          برای دریافت مشاوره و راهنمایی و رفع مشکلات احتمالی در سیستم نرم افزار
          لطفا با شماره های زیر تماس بگیرید : <br></br>
          09185624908<br></br>
          09354809610
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
