// Action type constants
const INCR = 'INCR';
const DECR = 'DECR';
const ADD_PRODUCT = 'ADD_PRODUCT'; 
// Initial state
const PRODUCTS = [];

// Action creators
const inAction = () => {
  return { type: INCR };

};

const deAction = () => {
  return { type: DECR };
};

const addProductAction = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: PRODUCTS
  };
};


export { INCR, DECR, ADD_PRODUCT, inAction, deAction, addProductAction, PRODUCTS };
