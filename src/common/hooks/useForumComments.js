import Axios from "axios";
import { useQuery } from "react-query";
import { config } from "../../config/api";
Axios.defaults.timeout = 10000;
export const useForumComments = (id) => {
  return useQuery(["forum", "comments", { id }], async () => {
    const { data } = await Axios.get(`${config.apiSeverRails}comments/${id}`);
    return data;
  });
};
