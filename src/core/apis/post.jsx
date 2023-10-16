import { instance } from "../instance";

export const postAPI = {

  getProgramList: () => instance.get('/news/programList'),

};
