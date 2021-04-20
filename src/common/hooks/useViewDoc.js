import Axios from "axios";
import { useQuery } from "react-query";
import { config } from "../../config/api";
Axios.defaults.timeout = 10000;
export const useViewDoc = (id) => {
  const queryInstance = useQuery(["viewdocs", id], async () => {
    const { data } = await Axios.get(`${config.apiSeverRails}/documents/${id}`);
    return data;
  });
  return [queryInstance.data, queryInstance];
};
