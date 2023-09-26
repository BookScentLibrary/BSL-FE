import instance from '../instance';

export const reviewListPage = (options) =>
  instance({
    method: 'GET',
    url: 'http://localhost:8080/review/',
    ...options,
  })