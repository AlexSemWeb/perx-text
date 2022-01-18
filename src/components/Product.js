import React from "react";
import Cart from "./Cart";
import Count from "./Count";
import Remove from "./Remove";
import { useDispatch } from "react-redux";
import {
  removeProductAction,
  addProductAction,
  minusProductAction,
} from "../store/productsReducer";

const Product = ({ img, title, id, price, inCart = 0, isFiltered }) => {
  const dispatch = useDispatch();

  // Удаление продукта
  function removeProduct() {
    dispatch(removeProductAction(id));
  }

  // Добавление поста
  function addProduct() {
    dispatch(addProductAction(id));
  }

  // Удаление продукта
  function minusProduct() {
    dispatch(minusProductAction(id));
  }

  return (
    <div className="product">
      <div className="product__img--container">
        <img
          className="product__img"
          src={"https://murmuring-tor-81614.herokuapp.com/" + img}
          alt=""
        />
      </div>
      {isFiltered && <Remove removeItem={removeProduct} />}
      <div className="product--description">
        <div className="product--left">
          <span className="title">{title}</span>
          <span className="price">{price + " $"}</span>
        </div>
        {inCart ? (
          <Count count={inCart} minus={minusProduct} plus={addProduct} />
        ) : (
          <Cart active={inCart} makeActive={addProduct} />
        )}
      </div>
    </div>
  );
};

export default Product;
