import { instance } from "../instance";

export const mainAPI = {
  getNewBook: () => instance.get('/main/newbook'),
  getReview: () => instance.get('/main/review'),
  getBestseller: () => instance.get('/main/bestseller'),
  getNotice: () => instance.get('/main/notice'),
  getProgram: () => instance.get('/main/program'),
  getRecommendBook: () => instance.get('/main/recommend'),
};
