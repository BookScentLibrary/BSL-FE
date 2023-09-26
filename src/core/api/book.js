
import instance from '../instance';




export const search = (options) =>
  instance({
    method: 'GET',
    url: 'http://localhost:8080/book/search',
    ...options,
  })