import axios from "axios";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";

const AddProduct = ({ setCHMenu, CHMenu }) => {
  const [resturants, setResturants] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [resName , setResName] = useState({})
  const data = {
    title: "",
    description: "",
    price: "",
    status: "published",
    Custom_field: [],
    categories:[]
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
    axios.get(`http://localhost:1337/categories/${CHMenu}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      console.log(res.data)
      setResName(res.data)
    });
  };

  const emptyData = isEmpty(resturants);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handledescription = (e) => {
    setDescription(e.target.value);
  };
  data.title = title;
  data.price = price;
  data.description = description
  data.categories.push(resName)


  const handleAdd = (e) => {
    e.preventDefault();
      axios.post(`http://localhost:3000/products`, data , {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then(res=>{
        console.log(res.data , "test")
      })
  };

  console.log(data)
  return (
    <div>
      {emptyData ? null : (
        <form onSubmit={handleAdd}>
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
          <div className="mb-3">
            <textarea
              className="form-control"
              id="productPrice"
              placeholder="توضیحات"
              onChange={handledescription}
              value={description}
              row={2}
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
            <button className="btn btn-success" type="submit">
              ثبت محصول
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddProduct;
