import { DECR, INCR, ADD_PRODUCT } from './Iphone.action';

let initialState = {
  cart: [],
  qty: 0 
};


let IphoneReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: 
      return { ...state, cart: [action.payload] }; 
    case DECR:
      return { qty: state.qty - 1 };
    case INCR:
      return { qty: state.qty + 1 };
    default:
      return state;
  }
};

export { IphoneReduser };
