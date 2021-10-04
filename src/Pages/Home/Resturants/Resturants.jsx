import React, { useEffect, useState } from "react";
import "./Resturants.css";
import Logo from "../../../assets/img/logo.png";
import axios from "axios";
import Header from "../../../Components/MenuLayouts/Header/Header";
import ResturantCard from "../../../Components/ResturantCard/ResturantCard";
import Footer from "../../../Components/MenuLayouts/Footer/Footer";
function Resturants() {
  const [restu, setRestu] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:1337/categories").then((res) => {
      console.log(res.data);
      setRestu(res.data);
    });
  }, []);
  return (
    <div className="d-flex justify-content-center resturants flex-wrap w-100">
      <Header title="رستوران مورد نظر خود را انتخاب کنید"/>
      <div className="resturantsCards w-100">
        <div className="row p-2 s-flex justify-content-center">
          {restu.map((item) => {
            return (
              <ResturantCard Logo={Logo} item={item}/>
            );
          })}
        </div>
      </div>
          <Footer link="/"/>
    </div>
  );
}

export default Resturants;
