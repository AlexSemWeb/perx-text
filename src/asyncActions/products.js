import {
  loadProductsAction,
  loadProductsFailureAction,
} from "../store/productsReducer";

// Получение постов
export const fetchProducts = (dealers = []) => {
  let dealersFilter = dealers.length ? `?dealers=${dealers.join(",")}` : "";

  return function (dispatch) {
    fetch(
      "https://murmuring-tor-81614.herokuapp.com/api/goods/" + dealersFilter
    )
      .then((response) => response.json())
      .then((json) => dispatch(loadProductsAction(json)))
      .catch((e) => {
        dispatch(loadProductsFailureAction());
      });
  };
};
