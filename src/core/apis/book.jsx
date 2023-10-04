import { instance } from "../instance";

export const bookAPI = {
  getBook: () => instance.get("/book/detail/"),

  getReaderData: () => instance.get("/book/readerData"),

  getSelectedBookReview: (bookNo) => instance.get(`/book/getReaview?bookNo=${bookNo}`),
};
