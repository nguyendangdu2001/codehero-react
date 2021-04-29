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
        console.log("id ne " + id);
        console.log(["forum", "comments", { id }]);
        qc.invalidateQueries(["forum", "comments"]);
      },
    }
  );
};

export default useCreateComment;
