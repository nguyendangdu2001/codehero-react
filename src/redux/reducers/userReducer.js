import * as Constants from "../constants/userConstants";

export const userReducerDefaultState = {
  auth: false,
  loading: false,
  error: "",
  userInfo: {
    _id: "",
    name: "",
    userPic: "",
    cart: [],
    ownCourses: [],
    roles: [],
  },
};

const userReducer = (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case Constants.USER_LOGIN_REQUEST:
    case Constants.USER_SIGNUP_REQUEST:
    case Constants.USER_LOGOUT_REQUEST:
      return { ...state, loading: true };
    case Constants.USER_LOGIN_SUCCESS:
    case Constants.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        auth: true,
        loading: false,
        userInfo: action.payload,
      };
    case Constants.USER_LOGIN_ERROR:
    case Constants.USER_SIGNUP_ERROR:
      return { ...state, auth: false, loading: false, error: action.payload };
    case Constants.USER_LOGOUT_SUCCESS:
    case Constants.USER_LOGOUT_ERROR:
      return { ...state, auth: false };
    case Constants.USER_ADD_CART_ITEM:
      return {
        ...state,
        userInfo: { ...state.userInfo, cart: action.payload },
      };
    default:
      return state;
  }
};
export default userReducer;
