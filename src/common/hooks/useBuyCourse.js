import axios from "axios";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { config } from "../../config/api";

const useBuyCourse = () => {
  const qc = useQueryClient();
  const dispatch = useDispatch();
  return useMutation(
    async (id) => {
      const { data } = await axios.post(`${config.apiSeverRails}course`, {
        course: id,
      });
      return data;
    },
    {
      onMutate: () => {},
      onSuccess: (user) => {},
      onSettled: (_, __, id) => {
        qc.invalidateQueries(["course", { id }]);
      },
    }
  );
};

export default useBuyCourse;
