import axios from "axios";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";

const AddProduct = ({ setCHMenu }) => {
  const [resturants, setResturants] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [addProduct, setAddProduct] = useState({});
  const data = {
    title: "",
    description: "",
    price: "",
    image: "",
    status: "published",
    custom_field: [],
  };

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

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const imageHandler = (e) => {
    setImageUpload(e.target.files[0]);
  };
  const formData = new FormData();
  const onFileUpload = (e) => {
    e.preventDefault();
    formData.append("image", imageUpload);
    axios
      .post("http://localhost:1337/upload/", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
    console.log(formData, "this is image form");
  };
  data.title = title;
  data.price = price;
  console.log(data);
  console.log(imageUpload, "this is image");

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
              onChange={handleTitle}
              value={title}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              id="productPrice"
              placeholder="قیمت محصول(تومان)"
              onChange={handlePrice}
              value={price}
            />
          </div>
          <div className="mb-3 row">
            <div className="col-9">
              <input
                type="file"
                className="form-control"
                id="productPic"
                placeholder="عکس محصول"
                onChange={imageHandler}
                accept="image/*"
                multiple={false}
              />
            </div>
            <button className="col-2 btn btn-primary" onClick={onFileUpload}>
              =
            </button>
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
