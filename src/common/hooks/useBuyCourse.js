import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { config } from "../../config/api";

const useBuyCourse = () => {
  const qc = useQueryClient();

  return useMutation(
    async (id) => {
      const { data } = await axios.post(`${config.apiSeverRails}courses`, {
        course: id,
      });
      return data;
    },
    {
      onMutate: () => {},
      onSuccess: (user) => {},
      onSettled: (_, __, id) => {
        qc.invalidateQueries(["course", id?.toString()]);
      },
    }
  );
};

export default useBuyCourse;
