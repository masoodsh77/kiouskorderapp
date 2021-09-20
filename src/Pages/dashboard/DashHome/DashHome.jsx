import React from "react";
import "../DashHome.css";
import { FaUtensils, FaReceipt, FaUserTag, FaDollarSign } from "react-icons/fa";
import Cards from "./Components/Cards";
import Chart from "./Components/Chart";

function DashHome() {
  return (
    <div className="text-center dashHome">
      <div className="row p-0 m-0">
        <div className="col-3">
          <Cards
            icon={<FaUtensils className="dashHomeCardIcon" />}
            title="رستوران ها"
            info="25"
            No="غرفه فعال"
          />
        </div>
        <div className="col-3">
          <Cards
            icon={<FaReceipt className="dashHomeCardIcon" />}
            title="سفارش ها"
            info="1520"
            No="فاکتور"
          />
        </div>
        <div className="col-3">
          <Cards
            icon={<FaUserTag className="dashHomeCardIcon" />}
            title="مشتری ها"
            info="2000"
            No="نفر"
          />
        </div>
        <div className="col-3">
          <Cards
            icon={<FaDollarSign className="dashHomeCardIcon" />}
            title="درآمد ها"
            info="300"
            No="میلیون تومان"
          />
        </div>
        <div className="col-7">
          <div className="chart">
            <div className="chartTitle w-100">نمودار فروش ماهانه مجموعه</div>
            <div className="chartContent">
                <Chart/>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="chart">
            <div className="chartTitle w-100">غرفه های برتر مجموعه</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashHome;
