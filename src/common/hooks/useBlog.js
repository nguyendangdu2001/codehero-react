import Axios from "axios";
import { useQuery } from "react-query";
import { config } from "../../config/api";
Axios.defaults.timeout = 10000;
export const useBlog = () => {
  const queryInstance = useQuery(["blogs"], async () => {
    const { data } = await Axios.get(`${config.apiSeverRails}blogs`);
    return data;
  });
  return [queryInstance.data, queryInstance];
};
