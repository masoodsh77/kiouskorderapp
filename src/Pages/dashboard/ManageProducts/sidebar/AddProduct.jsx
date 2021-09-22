import axios from "axios";
import React from "react";

function AddProduct({ resturants }) {
  return (
    <div>
      <form>
        <div className="mb-3">
          <select className="form-select" aria-label="Default select example">
            <option defaultValue>انتخاب رستوران</option>
            {resturants.map((item) => {
              return <option value={item.id}>{item.name}</option>;
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
      </form>
    </div>
  );
}

export default AddProduct;
