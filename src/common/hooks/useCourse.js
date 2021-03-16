import Axios from "axios";
import { useQuery } from "react-query";
import { config } from "../../config/api";

export const useCourses = () => {
  const queryInstance = useQuery(["courses"], async () => {
    const { data } = await Axios.get(`${config.apiGateWay}/course`);
    return data;
  });
  return [queryInstance.data, queryInstance];
};
