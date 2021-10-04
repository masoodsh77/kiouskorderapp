import React, { useEffect, useState } from "react";
import "./Resturants.css";
import Logo from "../../../assets/img/logo.png";
import axios from "axios";
function Resturants() {
  const [restu, setRestu] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:1337/categories").then((res) => {
      console.log(res.data);
      setRestu(res.data);
    });
  }, []);
  return (
    <div className="d-flex justify-content-center resturants flex-wrap">
      <div className="resturantsHeader w-100 text-center">
        رستوران مورد نظر خود را انتخاب کنید
      </div>
      <div className="resturantsCards w-100">
        <div className="row p-2 s-flex justify-content-center">
          {restu.map((item, i) => {
            return (
              <div key={i} className="resturantsCard col-3 d-flex justify-content-center align-items-center flex-wrap m-1">
                <img src={Logo} alt="" width="95rem" />
                <div className="w-100 text-center">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Resturants;
