import axios from "axios";

import { useMutation, useQueryClient } from "react-query";

import { config } from "../../config/api";

const useCreateComment = () => {
  const qc = useQueryClient();

  return useMutation(
    async (Idata) => {
      const { data } = await axios.post(
        `${config.apiSeverRails}comments`,
        Idata
      );
      return data;
    },
    {
      onMutate: () => {},
      onSuccess: (user) => {},
      onSettled: (_, __, { id_forum: id }) => {
        qc.invalidateQueries(["blog", "comments", { id }], { exact: true });
      },
    }
  );
};

export default useCreateComment;
