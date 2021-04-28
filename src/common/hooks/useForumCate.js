import Axios from "axios";
import { useQuery } from "react-query";
import { config } from "../../config/api";
Axios.defaults.timeout = 1000;
const useForumCate = () => {
  return useQuery(["cate_forums"], async () => {
    const { data } = await Axios.get(`${config.apiGateWay}cate_forums`);
    return data;
  });
};
export default useForumCate;
