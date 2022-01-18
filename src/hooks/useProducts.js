import { useMemo } from "react";

export function useProducts(products, isFiltered) {
  let productsArr = isFiltered
    ? products.filter((item) => item.inCart)
    : products.map((item) => item);

  let productsCount = useMemo(() => {
    return products.reduce(
      (acc, item) => (item.inCart ? (acc += item.inCart) : (acc += 0)),
      0
    );
  }, [products]);

  let productsPriceSum = useMemo(() => {
    return products
      .reduce(
        (acc, item) =>
          item.inCart ? (acc += item.inCart * item.price) : (acc += 0),
        0
      )
      .toFixed(2);
  }, [products]);
  return [productsArr, productsCount, productsPriceSum];
}
