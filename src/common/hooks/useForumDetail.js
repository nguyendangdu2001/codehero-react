import Axios from "axios";
import { useQuery } from "react-query";
import { config } from "../../config/api";
Axios.defaults.timeout = 1000;
const useForumDetail = (id) => {
  return useQuery(["forum", { id }], async () => {
    const { data } = await Axios.get(`${config.apiGateWay}/forums/${id}`);
    return data;
  });
};
export default useForumDetail;
