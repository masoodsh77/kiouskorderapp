import axios from "axios";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";

function ProductTable({ CHMenu }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:1337/categories/${CHMenu}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setProducts(res.data.products);
      });
  }, [CHMenu]);
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
            <td colspan="6">
              <div class="alert alert-danger mt-4" role="alert">
                ابتدا از منوی سمت راست نام رستوران را انتخاب نمایید
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
                  <td>حذف | ویرایش</td>
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
