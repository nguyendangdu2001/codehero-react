import Axios from "axios";
import { useQuery } from "react-query";
import { config } from "../../config/api";
Axios.defaults.timeout = 10000;
export const useBlogDetail = (id) => {
  return useQuery(["blog", { id }], async () => {
    const { data } = await Axios.get(`${config.apiSeverRails}blogs/${id}`);
    return data;
  });
};
