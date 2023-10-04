
import { instance } from '../instance';


export const bookAPI = {
  getReaderData: () => instance.get("/book/readerData"),

  getSelectedBookReview: (bookNo) => instance.get(`/book/getReaview?bookNo=${bookNo}`),
};