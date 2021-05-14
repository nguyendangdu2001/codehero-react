import Axios from "axios";
import { useQuery } from "react-query";
import { config } from "../../config/api";
Axios.defaults.timeout = 10000;
export const useCourseDetail = (id) => {
  return useQuery(["course", id], async () => {
    const { data } = await Axios.get(`${config.apiSeverRails}/courses/${id}`);
    return data;
  });
};
