import axios from "axios";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";

function ProductTable({ CHMenu }) {
  const [products, setProducts] = useState([]);
  const [deleteItem , setDeleteItem] = useState(1);
  useEffect(() => {
    axios
      .get(`http://localhost:1337/categories/${CHMenu}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setProducts(res.data.products);
        console.log(res.data)
      });
  }, [CHMenu ,deleteItem ]);
  const handleEdit = (e) => {
    console.log(e.target.value);
    axios.delete(`http://localhost:1337/products/${e.target.value}`)
    .then(res =>{
      setDeleteItem(deleteItem + 1)
    })
  };
  console.log(products, "tatata");
  const emptyData = isEmpty(products);
  return (
    <div>
      {emptyData ? (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ردیف</th>
              <th scope="col">عکس</th>
              <th scope="col">کد محصول</th>
              <th scope="col">نام محصول</th>
              <th scope="col">قیمت</th>
              <th scope="col">عملیات</th>
            </tr>
          </thead>
          <tbody>
            <td colSpan="6">
              <div className="alert alert-danger mt-4" role="alert">
                محصولی جهت نمایش وجود ندارد لطفا نام رستوران را تغییر دهید
              </div>
            </td>
          </tbody>
        </table>
      ) : (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ردیف</th>
              <th scope="col">عکس</th>
              <th scope="col">کد محصول</th>
              <th scope="col">نام محصول</th>
              <th scope="col">قیمت</th>
              <th scope="col">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {products.map((items, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>
                    <img
                      src={`http://localhost:1337${items.image.url}`}
                      alt={items.name}
                      width="40px"
                    />
                  </td>
                  <td>{items.id}</td>
                  <td>{items.title}</td>
                  <td>${items.price}</td>
                  <td>
                    <button className=" btn btn-outline-danger" value={items.id} onClick={handleEdit}>
                      حذف
                    </button>
                    {" "} |{" "}
                    <button className=" btn btn-outline-success" value={items.id} onClick={handleEdit}>
                      ویرایش
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProductTable;
