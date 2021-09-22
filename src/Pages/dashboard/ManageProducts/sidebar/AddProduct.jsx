import axios from "axios";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";

const AddProduct = ({ setCHMenu }) => {
  const [resturants, setResturants] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1337/categories", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setResturants(res.data);
      });
  }, []);

  const handleResturant = (e) => {
    setCHMenu(e.target.value);
  };
  const emptyData = isEmpty(resturants);
  return (
    <div>
      {emptyData ? null : (
        <form>
          <div className="mb-3">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={handleResturant}
            >
              <option defaultValue={0}>انتخاب رستوران</option>
              {resturants.map((item) => {
                return (
                  <option key={item.id} value={item.slug}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="productName"
              placeholder="نام محصول"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="productCode"
              placeholder="کد محصول"
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              id="productPrice"
              placeholder="قیمت محصول(تومان)"
            />
          </div>
          <div className="mb-3">
            <input
              type="file"
              className="form-control"
              id="productPic"
              placeholder="عکس محصول"
            />
          </div>
          <div className="chartTitle w-100">آپشن های اضافی محصول</div>
          <div
            className="input-group mb-3 text-right"
            style={{ direction: "ltr" }}
          >
            <input
              type="number"
              className="form-control"
              aria-label="Text input with checkbox"
              placeholder="52000"
            />

            <input
              type="text"
              className="form-control"
              aria-label="Text input with checkbox"
              placeholder="همراه با سیب زمینی"
            />
            <div className="input-group-text">
              <input
                className="form-check-input mt-0"
                type="checkbox"
                value="1"
                aria-label="Checkbox for following text input"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
          </div>
          <div
            className="input-group mb-3 text-right"
            style={{ direction: "ltr" }}
          >
            <input
              type="number"
              className="form-control"
              aria-label="Text input with checkbox"
              placeholder="52000"
            />

            <input
              type="text"
              className="form-control"
              aria-label="Text input with checkbox"
              placeholder="همراه با سیب زمینی"
            />
            <div className="input-group-text">
              <input
                className="form-check-input mt-0"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </div>
          </div>
          <div
            className="input-group mb-3 text-right"
            style={{ direction: "ltr" }}
          >
            <input
              type="number"
              className="form-control"
              aria-label="Text input with checkbox"
              placeholder="52000"
            />

            <input
              type="text"
              className="form-control"
              aria-label="Text input with checkbox"
              placeholder="همراه با سیب زمینی"
            />
            <div className="input-group-text">
              <input
                className="form-check-input mt-0"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </div>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-success" type="button">
              ثبت محصول
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddProduct;
