import { instance } from "../instance";

export const newBookAPI = {
    getNewBookList: () => instance.get('/book/newbook'),
};