import axios from "axios";
import React, { useEffect, useState } from "react";
import AddProduct from "./sidebar/AddProduct";

function ManageProducts() {
    const resturants = []
  useEffect(() => {
    axios
      .get("http://localhost:1337/categories", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
          res.data.map(items=>{
              resturants.push(items)
          })
      });
  }, [resturants]);
  return (
    <div className="text-center p-3">
      <div className="row p-0 m-0">
        <div className="card col-4 h-100">
          <div className="chartTitle w-100">افزودن محصولات جدید</div>
          <AddProduct resturants={resturants} />
        </div>
        <div className="card col-8 h-100">
          <div className="chartTitle w-100">محصولات</div>
        </div>
      </div>
    </div>
  );
}

export default ManageProducts;
