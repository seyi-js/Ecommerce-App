import {
  GET_ITEMS,
  GET_ITEM,
  DELETE_ITEMS,
    ADD_TO_CART,
  ADD_ITEM,
    LOAD_ITEM,
    ITEMS_LOADING
  } from '../actions/types';
const initialState = {
    items : [],
  loading: false,
  cart: [],
    loadedItem: []
    
}

export default (state = initialState, action)=>{
  
  switch ( action.type ) {
    case LOAD_ITEM:
      return {
        ...state,
        loadedItem: action.payload
      };
      case GET_ITEMS:
        return {
          ...state,
          items: action.payload,
          loading: false
        };
      case ADD_TO_CART:
        return {
          ...state, 
          cart: [state.items.filter(item => item._id === action.payload),  ...state.cart]
        }
        case GET_ITEM:
          return {
            ...state,
            items: state.items.filter(item => item._id === action.payload),
            loading: false
          };
     
        case DELETE_ITEMS:
            return {
              ...state,
              items: state.items.filter(item => item._id !== action.payload)
            };
      case ADD_ITEM:
        return {
          ...state,
          items: [action.payload, ...state.items]
        };

      case ITEMS_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
       
    }
}

