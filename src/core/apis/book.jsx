import { instance } from "../instance";

export const bookAPI = {
  searchBook: (value) => instance.get(`/book/search?searchValue=${value}`),

  getBook: () => instance.get("/book/detail/"),

  getReaderData: () => instance.get("/book/readerData"),

  getSelectedBookReview: (bookNo) =>
    instance.get(`/book/getReaview?bookNo=${bookNo}`),

  bookRecommendAPI: (data) => instance.post("/admin/recommendWrite", data),
};
