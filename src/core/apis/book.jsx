import { instance } from "../instance";

export const bookAPI = {
  searchBook: (value) => instance.get(`/book/search?searchValue=${value}`),

  getBook: (bookNo) => instance.get(`/book/detail/?bookNo=${bookNo}`),

  getReaderData: (bookNo) =>
    instance.get(`/book/detail/reader?bookNo=${bookNo}`),

  getRatingData: (bookNo) => instance.get(`/book/detail/rate?bookNo=${bookNo}`),

  // getSelectedBookReview: (bookNo) =>
  //  instance.get(`/book/getReaview?bookNo=${bookNo}`),

  getSelectedBookReview: (bookNo) =>
    instance.get(`/book/getReaview?bookNo=${bookNo}`),

  selectBookRecommendAPI: (searchValue, searchType, pageNumber, pageSize) => {
    const url = `/book/search?searchValue=${searchValue}&searchType=${searchType}&pageNumber=${pageNumber}&pageSize=${pageSize}`;
    return instance.get(url);
  },
  bookRecommendAPI: (data) => instance.post("/admin/recommendCreate", data),

  BookReivewAPI: (data) => instance.post("/news/reviewWrite", data),
};
