import { instance } from "../instance";

export const mypageAPI = {
  getRentHistory: (userId) =>
    instance.get(`/user/mypage/rent/history?userId=${userId}`),
  getRentHistoryAll: (userId) =>
    instance.get(`/book/rent/history?userId=${userId}`),
  getCount: (userId) => instance.get(`/user/mypage/count?userId=${userId}`),
  getRentNow: (userId) => instance.get(`/book/rent?userId=${userId}`),
  getReview: (userId) =>
    instance.get(`/user/mypage/review/main?userId=${userId}`),
  getReviewAll: (userId) =>
    instance.get(`/user/mypage/review?userId=${userId}`),
  getBookList: (data) => instance.post("/user/mypage/book/list", data),
  getBookCart: (userId) => instance.get(`/book/rent/cart?userId=${userId}`),
  deleteBookCart: (userId, bookNo) =>
    instance.delete(`/book/rent/cart?userId=${userId}&bookNo=${bookNo}`),
  deleteAllBookCart: (userId) =>
    instance.delete(`/book/rent/cart?userId=${userId}`),
  rentBook: (data) => instance.post("/book/rent", data),
  returnBook: (data) => instance.post("/book/rent/return", data),
};
