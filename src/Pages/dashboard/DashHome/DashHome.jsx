import React from "react";
import "../DashHome.css";
import { FaUtensils, FaReceipt, FaUserTag, FaDollarSign, FaChevronLeft, FaLongArrowAltLeft } from "react-icons/fa";
import Cards from "./Components/Cards";
import Chart from "./Components/Chart";
import Rlogo from "../../../assets/img/RLogo.jpg";

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
              <Chart />
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="chart">
            <div className="chartTitle w-100">غرفه های برتر مجموعه</div>
            <div className="resturantCard">
              <div className="row w-100 p-0 m-0 d-flex align-items-center">
                  <div className="col-1">1-</div>
                <div className="col-2 resturantImg">
                  <img src={Rlogo} alt="" className="w-100" />
                </div>
                <div className="col-8 row">
                  <div className="resturantName col-4">اصغر کثیف  </div>
                  <div className="resturantArrow col-1"><FaLongArrowAltLeft/></div>
                  <div className="resturantSell col-6">90<span> میلیون تومان</span> </div>
                </div>
                <div className="col-1 resturantIcon"><FaChevronLeft/></div>
              </div>
            </div>
            <div className="resturantCard">
              <div className="row w-100 p-0 m-0 d-flex align-items-center">
                  <div className="col-1">2-</div>
                <div className="col-2 resturantImg">
                  <img src={Rlogo} alt="" className="w-100" />
                </div>
                <div className="col-8 row">
                  <div className="resturantName col-4">فری کثیف  </div>
                  <div className="resturantArrow col-1"><FaLongArrowAltLeft/></div>
                  <div className="resturantSell col-6">70<span> میلیون تومان</span> </div>
                </div>
                <div className="col-1 resturantIcon"><FaChevronLeft/></div>
              </div>
            </div>
            <div className="resturantCard">
              <div className="row w-100 p-0 m-0 d-flex align-items-center">
                  <div className="col-1">3-</div>
                <div className="col-2 resturantImg">
                  <img src={Rlogo} alt="" className="w-100" />
                </div>
                <div className="col-8 row">
                  <div className="resturantName col-4">اکبر میکی</div>
                  <div className="resturantArrow col-1"><FaLongArrowAltLeft/></div>
                  <div className="resturantSell col-6">60<span> میلیون تومان</span> </div>
                </div>
                <div className="col-1 resturantIcon"><FaChevronLeft/></div>
              </div>
            </div>
            <div className="resturantCard">
              <div className="row w-100 p-0 m-0 d-flex align-items-center">
                  <div className="col-1">4-</div>
                <div className="col-2 resturantImg">
                  <img src={Rlogo} alt="" className="w-100" />
                </div>
                <div className="col-8 row">
                  <div className="resturantName col-4">اصغر کثیف  </div>
                  <div className="resturantArrow col-1"><FaLongArrowAltLeft/></div>
                  <div className="resturantSell col-6">50<span> میلیون تومان</span> </div>
                </div>
                <div className="col-1 resturantIcon"><FaChevronLeft/></div>
              </div>
            </div>
            <div className="resturantCard">
              <div className="row w-100 p-0 m-0 d-flex align-items-center">
                  <div className="col-1">5-</div>
                <div className="col-2 resturantImg">
                  <img src={Rlogo} alt="" className="w-100" />
                </div>
                <div className="col-8 row">
                  <div className="resturantName col-4">اصغر کثیف  </div>
                  <div className="resturantArrow col-1"><FaLongArrowAltLeft/></div>
                  <div className="resturantSell col-6">40<span> میلیون تومان</span> </div>
                </div>
                <div className="col-1 resturantIcon"><FaChevronLeft/></div>
              </div>
            </div>
            <div className="resturantCard">
              <div className="row w-100 p-0 m-0 d-flex align-items-center">
                  <div className="col-1">6-</div>
                <div className="col-2 resturantImg">
                  <img src={Rlogo} alt="" className="w-100" />
                </div>
                <div className="col-8 row">
                  <div className="resturantName col-4">اصغر کثیف  </div>
                  <div className="resturantArrow col-1"><FaLongArrowAltLeft/></div>
                  <div className="resturantSell col-6">30<span> میلیون تومان</span> </div>
                </div>
                <div className="col-1 resturantIcon"><FaChevronLeft/></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default DashHome;
