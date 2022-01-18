import React, { useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useProducts } from "./hooks/useProducts";
import { fetchProducts } from "./asyncActions/products";
import Product from "./components/Product";
import Filter from "./components/Filter";
import CartInfo from "./components/CartInfo";

const App = ({ dealers }) => {
  const products = useSelector((state) => state.productsReducer.products);
  const isFetching = useSelector((state) => state.productsReducer.isFetching);
  const isFiltered = useSelector((state) => state.productsReducer.isFiltered);
  const isFailure = useSelector((state) => state.productsReducer.isFailure);
  const [productsArr, productsCount, productsPriceSum] = useProducts(
    products,
    isFiltered
  );
  const dispatch = useDispatch();

  let product = (item) => (
    <Product
      img={item.image}
      title={item.name}
      key={item.name}
      id={item.name}
      price={item.price}
      inCart={item.inCart}
      isFiltered={isFiltered}
    />
  );

  useEffect(() => {
    dispatch(fetchProducts(dealers));
  }, []); // eslint-disable-line

  if (isFetching) {
    return <div className="loading">Идёт загрузка...</div>;
  } else if (isFailure) {
    return (
      <div className="loading">Произошла ошибка при загрузке продуктов</div>
    );
  } else if (!products.length) {
    return <div className="loading">Продуктов нет</div>;
  }

  return (
    <>
      <Filter productsCount={productsCount} />
      <div className="product--container">
        {isFiltered && <CartInfo price={productsPriceSum} />}
        {productsArr.length
          ? productsArr.map((item) => product(item))
          : "Продуктов нет"}
      </div>
    </>
  );
};

export default App;
