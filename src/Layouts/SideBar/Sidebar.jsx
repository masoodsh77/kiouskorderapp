import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import {FaCashRegister, FaChartPie, FaCloudscale, FaDoorClosed, FaShoppingBasket, FaStore} from 'react-icons/fa'

function Sidebar(props) {
  return (
    <div className="h-100 sidebar  flex-wrap">
      <div className="LogoPosition d-flex justify-content-center align-items-center">
        <img src={logo} width="40px" className="logo" />
        <span className="brandName text-light">کای دای</span>
      </div>
      <div className="Menu">
        <ul>
          <NavLink className="li" exact to="/dashboard" activeClassName="activeMenu">
            <FaCloudscale className="sidebarMenuIcon"/> داشبورد
          </NavLink>
          <NavLink  className="li" to="/dashboard/products" activeClassName="activeMenu">
          <FaShoppingBasket className="sidebarMenuIcon"/> مدیریت محصولات
          </NavLink>
          <NavLink  className="li" to="/dashboard/produc" activeClassName="activeMenu">
          <FaStore className="sidebarMenuIcon"/> مدیریت فروشگاه ها
          </NavLink>
          <NavLink  className="li" to="/dashboard/produts" activeClassName="activeMenu">
          <FaCashRegister className="sidebarMenuIcon"/> مدیریت فروش
          </NavLink>
          <NavLink  className="li" to="/dashboard/reports" activeClassName="activeMenu">
          <FaChartPie className="sidebarMenuIcon"/> گزارشات
          </NavLink>
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
