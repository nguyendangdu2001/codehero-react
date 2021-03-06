import Axios from "axios";
import { useQuery } from "react-query";
import { config } from "../../config/api";
Axios.defaults.timeout = 10000;
export const useCourses = () => {
  const queryInstance = useQuery(["courses"], async () => {
    const { data } = await Axios.get(`${config.apiSeverRails}/courses`);
    return data;
  });
  return [queryInstance.data, queryInstance];
};
