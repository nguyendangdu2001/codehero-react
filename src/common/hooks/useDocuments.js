import Axios from "axios";
import { useQuery } from "react-query";
import { config } from "../../config/api";
Axios.defaults.timeout = 10000;
export const useDocuments = () => {
  const queryInstance = useQuery(["documents"], async () => {
    const { data } = await Axios.get(`${config.apiSeverRails}/documents`);
    return data;
  });
  return [queryInstance.data, queryInstance];
};
