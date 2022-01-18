// Состояние по умолчанию
const defaultState = {
  products: [],
  isFetching: true,
  isFiltered: false,
  isFailure: false,
};

// Типы action
export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const LOAD_PRODUCTS_FAILURE = "LOAD_PRODUCTS_FAILURE";
export const ADD_TO_CART_PRODUCT = "ADD_TO_CART_PRODUCT";
export const MINUS_PRODUCT = "MINUS_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const REMOVE_ALL_PRODUCT = "REMOVE_ALL_PRODUCT";
export const TOOGLE_FILTER_PRODUCTS = "FILTER_PRODUCTS";

function getLocalStorage() {
  return JSON.parse(localStorage.getItem("cart")) || {};
}

function setLocalStorage(product) {
  let cart = getLocalStorage();
  cart[product.name] = product.inCart;
  localStorage.setItem("cart", JSON.stringify(cart));
}

//Reduser
export const productsReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    // Добавление продуктов при начальной загрузке
    case LOAD_PRODUCTS:
      let inStorage = getLocalStorage();
      let loadedArr = action.payload.map((item) => {
        if (inStorage[item.name]) {
          item.inCart = inStorage[item.name];
        }
        return item;
      });
      return {
        ...state,
        products: [...state.products, ...loadedArr],
        isFetching: false,
      };
    // Ошибка загрузки продуктов
    case LOAD_PRODUCTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isFailure: true,
      };
    // Удаление продукта путём фильтрации
    case REMOVE_PRODUCT:
      let filteredProducts = state.products.map((item) => {
        if (item.name === action.id) {
          item.inCart = 0;
          setLocalStorage({ name: item.name, inCart: item.inCart });
        }
        return item;
      });
      return {
        ...state,
        products: [...filteredProducts],
      };
    // Добавление в корзину продукта
    case ADD_TO_CART_PRODUCT:
      let productsInCart = state.products.map((item) => {
        if (item.name === action.id) {
          item.inCart = item.inCart >= 0 ? item.inCart + 1 : 1;
          setLocalStorage({ name: item.name, inCart: item.inCart });
        }

        return item;
      });
      return {
        ...state,
        products: [...productsInCart],
      };
    // Удаление продукта из корзины
    case MINUS_PRODUCT:
      let productsAfterMinus = state.products.map((item) => {
        if (item.name === action.id) {
          item.inCart = item.inCart > 0 ? item.inCart - 1 : 0;
          setLocalStorage({ name: item.name, inCart: item.inCart });
        }

        return item;
      });
      return {
        ...state,
        products: [...productsAfterMinus],
      };
    // Удаление продуктов из корзины
    case REMOVE_ALL_PRODUCT:
      let productsClear = state.products.map((item) => {
        delete item.inCart;
        localStorage.removeItem("cart");
        return item;
      });
      return {
        ...state,
        products: [...productsClear],
      };
    // Включение, выключение фильтрации
    case TOOGLE_FILTER_PRODUCTS: {
      return {
        ...state,
        isFiltered: !state.isFiltered,
      };
    }
    default:
      return state;
  }
};

// Actions
export const loadProductsAction = (payload) => ({
  type: LOAD_PRODUCTS,
  payload,
});
export const loadProductsFailureAction = () => ({
  type: LOAD_PRODUCTS_FAILURE,
});
export const removeProductAction = (id) => ({ type: REMOVE_PRODUCT, id });
export const addProductAction = (id) => ({ type: ADD_TO_CART_PRODUCT, id });
export const minusProductAction = (id) => ({ type: MINUS_PRODUCT, id });
export const removeAllProductsAction = () => ({ type: REMOVE_ALL_PRODUCT });
export const toogleFilterProductsAction = () => ({
  type: TOOGLE_FILTER_PRODUCTS,
});
