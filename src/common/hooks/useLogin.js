import axios from "axios";
import React from "react";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { config } from "../../config/api";

const useLogin = () => {
  const dispatch = useDispatch();
  return useMutation(
    async () => {
      const { data } = await axios.get(`${config.apiSeverRails}login`);
      return data?.[0];
    },
    {
      onMutate: () => {
        dispatch({ type: "USER_LOGIN_REQUEST" });
      },
      onSuccess: (user) => {
        dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });
      },
    }
  );
};

export default useLogin;
