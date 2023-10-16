import { instance } from "../instance";

export const bookAPI = {
  searchBook: () => instance.get(`/book/search?searchValue=${searchValue}?pageNumber=${1}`),

  getBook: () => instance.get("/book/detail/"),

  getReaderData: () => instance.get("/book/readerData"),

  getSelectedBookReview: (bookNo) => instance.get(`/book/getReaview?bookNo=${bookNo}`),
};
