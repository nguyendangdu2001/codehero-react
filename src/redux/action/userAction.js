import axios from "axios";
import Cookies from "js-cookie";
import * as userConstants from "../constants/userConstants";
import { config } from "../../config/api";

export const loginAction = (loginData, cb) => async (dispatch) => {
  dispatch({ type: userConstants.USER_LOGIN_REQUEST });
  try {
    const { data } = await axios.post(`${config.apiSeverRails}login`);
    console.log(data?.[0]);
    dispatch({
      type: userConstants.USER_LOGIN_SUCCESS,
      payload: { ...data?.[0] },
    });
    Cookies.set("userInfo", JSON.stringify(data?.[0]));
    cb?.(data.user?.role);
  } catch (error) {
    console.log(error);
    dispatch({
      type: userConstants.USER_LOGIN_ERROR,
      payload: error?.response?.data,
    });
    // console.log(error);
  }
};

export const signupAction = (signUpData, cb) => async (dispatch) => {
  dispatch({ type: userConstants.USER_SIGNUP_REQUEST });
  try {
    const { data } = await axios.post(
      `${config.apiGateWay}/register`,
      signUpData
    );
    dispatch({ type: userConstants.USER_SIGNUP_SUCCESS, payload: { ...data } });
    Cookies.set("userInfo", JSON.stringify(data));
    cb(data?.user?.role);
  } catch (error) {
    dispatch({
      type: userConstants.USER_SIGNUP_ERROR,
      payload: error?.response?.data,
    });
    // console.log(error);
  }
};
export const logout = (cb) => async (dispatch) => {
  try {
    dispatch({ type: userConstants.USER_LOGOUT_REQUEST });
    // await Axios.get(`${nodeApiLink}/api/auth/logout`);
    dispatch({ type: userConstants.USER_LOGOUT_SUCCESS });
    Cookies.remove("userInfo");
    cb();
    dispatch({ type: "RESET" });
  } catch (error) {
    dispatch({ type: userConstants.USER_LOGOUT_ERROR, payload: error });
  }
};
export const updateUserInfo = (data) => (dispatch, getState) => {
  Cookies.set(
    "userInfo",
    JSON.stringify({ ...getState()?.userStatus?.userInfo, ...data })
  );
  dispatch({ type: userConstants.FETCH_USER_INFO_SUCCESS, payload: data });
};
