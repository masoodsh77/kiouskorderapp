import React from "react";
import logo from "../../assets/img/logo.png";

function Sidebar() {
  return (
    <div className="h-100 sidebar  flex-wrap">
      <div className="LogoPosition d-flex justify-content-center align-items-center"> 
        <img src={logo} width="40px" className="logo" />
        <span className="brandName">کای دای</span>
      </div>
      <div className="Menu">
          <ul>
              <li>داشبورد</li>
              <li>مدیریت محصولات</li>
              <li>مدیریت فروشگاه ها</li>
              <li>مدیریت محصولات</li>
              <li>مدیریت ایستگاه ها</li>
              <li> گزارشات</li>
          </ul>
      </div>
      <div className="support">
          <p>
            برای دریافت مشاوره و راهنمایی و رفع مشکلات احتمالی در سیستم نرم افزار لطفا با شماره های زیر تماس بگیرید : <br></br>
            09185624908<br></br>
            09354809610
          </p>
      </div>
    </div>
  );
}

export default Sidebar;
