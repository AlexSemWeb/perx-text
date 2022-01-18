import React from "react";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { toogleFilterProductsAction } from "../store/productsReducer";

const Filter = ({ productsCount }) => {
  const dispatch = useDispatch();
  const isFiltered = useSelector((state) => state.productsReducer.isFiltered);

  function filterProducts() {
    dispatch(toogleFilterProductsAction());
  }

  return (
    <div
      className={`filter ${productsCount ? "active" : ""} `}
      data-product-count={productsCount}
    >
      <Cart active={isFiltered} makeActive={filterProducts} />
    </div>
  );
};

export default Filter;
