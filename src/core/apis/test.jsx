import { instance } from "../instance";

export const testAPI = {
  // 일반 api - get 호출 예시 1
  test_get_1: () => instance.get('/test'),

  // 일반 api - get 호출 예시 2
  test_get_2: (param1, param2) => instance.get(`/test?param1=${param1}&param2=${param2}`),

  // 일반 api - post 호출 예시 1
  test_post: (data1, data2) => instance.post("/test/ex", {
      data1: data1,
      data2: data2,
  }),

  // 일반 api - post 호출 예시 2
  test_post_2: (data) => instance.post("/test/ex", data),

  // formdata 예시
  test_formdata: (data) => instance.post("/test", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
  }),

  getBook: () => instance.get("/book/"),

};
