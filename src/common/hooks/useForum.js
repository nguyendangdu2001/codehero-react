import Axios from "axios";
import { useQuery } from "react-query";
import { config } from "../../config/api";
Axios.defaults.timeout = 1000;
const useForum = () => {
  const queryInstance = useQuery(["courses"], async () => {
    const { data } = await Axios.get(`${config.apiGateWay}/forum`);
    return data;
  });
  return [queryInstance.data, queryInstance];
};
export default useForum;
