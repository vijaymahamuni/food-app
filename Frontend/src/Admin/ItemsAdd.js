import React from "react";
import { useState } from "react";
import axios from "axios";
import { REACT_APP_HOST } from "../utils/Host_pass";
function ItemsAdd() {
  const [productName, setProductName] = useState();
  const [description, setDescription] = useState();
  const [productCategory, setProductCategory] = useState();
  const [productPrice, setProductPrice] = useState();
  const AddItems = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${REACT_APP_HOST}/api/food/add`, {
        productName,
        description,
        productCategory,
        productPrice,
      });
      console.log("Items added:", response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="mt-5">
      <div className="mx-auto w-3/12">
        <h1 className="text-black text-xl font-bold ml-32">Add Items</h1>

        <div className="mt-10 ">
          <input
            type="text"
            name="productName"
            placeholder="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="p-2 w-10/12 font-bold rounded-md"
            style={{ border: "0.5px solid gray", Opacity: "0.1" }}
          />
        </div>

        <div className="mt-10">
          <input
            type="text"
            name="description"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 w-10/12 font-bold rounded-md"
            style={{ border: "0.5px solid gray", Opacity: "0.1" }}
          />
        </div>

        <div className="mt-10">
          <input
            type="text"
            name="productCategory"
            id="productCategory"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            className="p-2 w-10/12 font-bold rounded-md"
            style={{ border: "0.5px solid gray", Opacity: "0.1" }}
            placeholder="productCategory"
            pattern="[0-9]{10}"
            required
          />
        </div>
        <div className="mt-10">
          <input
            type="number"
            name="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="p-2 w-10/12 font-bold rounded-md"
            style={{ border: "0.5px solid gray", Opacity: "0.1" }}
            placeholder="productPrice"
          />
        </div>

        <button
          className="p-2 w-32 rounded-lg font-bold bg-[#eee5cf] text-[#ba373b] mt-10 text-center ml-24"
          onClick={AddItems}
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default ItemsAdd;
