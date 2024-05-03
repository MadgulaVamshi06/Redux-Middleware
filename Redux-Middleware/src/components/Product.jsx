import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/action";
import { useSelector } from "react-redux";

const Product = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleClick(){
    dispatch(fetchData());
  }

 

  return (
    <>
      <button onClick={handleClick}>Load Products</button>
           
      {state.data && state.data.data && state.data.data.length > 0 && state.data.data.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <h3>Brand: {item.brand}</h3>
          <p>Category: {item.category}</p>
          <p>{item.title}</p>
          <p>Rs.{item.price}</p>
        </div>
      ))}
    </>
  );
};

export default Product;
