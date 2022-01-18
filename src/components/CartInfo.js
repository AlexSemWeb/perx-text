import React from "react";
import { useDispatch } from "react-redux";
import Remove from "./Remove";
import { removeAllProductsAction } from "../store/productsReducer";

const CartInfo = ({ price }) => {
  const dispatch = useDispatch();

  function removeProducts() {
    dispatch(removeAllProductsAction());
  }

  return (
    <div className="cart__info">
      <span className="cart__info-sum">
        {`Суммарная стоимость: ${price} $`}
      </span>
      <div className="cart__info-remove">
        Убрать все товары <Remove removeItem={removeProducts} />
      </div>
    </div>
  );
};

export default CartInfo;
