import React, { useState } from "react";
import AddProduct from "./sidebar/AddProduct";
import ProductTable from "./Table/ProductTable";

function ManageProducts() {
    const [CHMenu , setCHMenu] = useState('')

    console.log(CHMenu)
  return (
    <div className="text-center h-100 p-1">
      <div className="row p-0 m-0">
        <div className="card col-3 h-100 m-2 mt-0">
          <div className="chartTitle w-100">افزودن محصولات جدید</div>
          <AddProduct setCHMenu={setCHMenu}/>
        </div>
        <div className="card col-8 h-100">
          <div className="chartTitle w-100">محصولات</div>
          <ProductTable CHMenu={CHMenu}/>
        </div>
      </div>
    </div>
  );
}

export default ManageProducts;
