import axios from "axios";

import { useMutation, useQueryClient } from "react-query";

import { config } from "../../config/api";

const useCreateForum = () => {
  const qc = useQueryClient();

  return useMutation(
    async (Idata) => {
      const { data } = await axios.post(`${config.apiSeverRails}forums`, Idata);
      return data;
    },
    {
      onMutate: () => {},
      onSuccess: (user) => {},
      onSettled: () => {
        qc.invalidateQueries(["forums"], { exact: true });
      },
    }
  );
};

export default useCreateForum;
