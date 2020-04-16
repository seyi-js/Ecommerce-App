import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  DELETE_CART,
  REGISTER_FAIL
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('session'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    isAdmin: null,
    cart_item:[]
};




export default function (state = initialState, action) {
    switch ( action.type ) {
          case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload,
                cart_item: action.payload.cart_items
            };
       case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('session', action.payload.session.userId)
             return {
                 ...state,
                 ...action.payload,
                isAuthenticated: true,
                 isLoading: false,
                 isAdmin: action.payload.user.isAdmin,
                 
                
            };
        case AUTH_ERROR:
        case  LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            localStorage.removeItem('session')
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            };
            case DELETE_CART:
                return {
                  ...state,
                  cart_item: state.cart_item.filter(item => item._id !== action.payload)
                };
        default:
            return state;
    }
}
