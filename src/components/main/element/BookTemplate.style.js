import styled from "styled-components";

export const Basic = styled.div`
  width: 204px;
  cursor: pointer;
  & > .book_temp__title {
    font-weight: 700;
    margin-top: 24px;
  }

  & > .book_temp__author {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray};
    margin-top: 8px;
  }
`;

export const Best = styled.div`
  display: flex;
  width: 280px;
  gap: 16px;
  cursor: pointer;
`;

export const Recommend = styled.div`
  width: 364px;
  height: 314px;
  background-color: #fafafa;
  border-radius: 10px;
  cursor: pointer;
  padding: 32px;

  & > .book_temp__contentWrapper {
    display: flex;
    gap: 32px;
  }

  & > div > .book_temp__title {
    margin-top: 16px;
    font-weight: 700;
  }

  & > div > .book_temp__author {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray};
  }

  & > div > .content {
    width: 152px;
    height: 190px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > div > div > .book_temp__content {
    width: 100%;
    white-space: normal;
  }
`;

export const Info = styled.div`
  width: 150px;
  display: grid;
  grid-template-rows: fit-content(100px) fit-content(100px);
  align-content: space-between;
  & > div {
    height: fit-content;
  }

  & > .rank {
    color: ${({ rank, theme }) =>
      rank === 1
        ? theme.colors.secondary
        : rank === 2
        ? theme.colors.primary
        : rank === 3
        ? theme.colors.tertiary
        : "#000"};
    font-weight: 800;
  }

  & > div > .book_temp__title {
    font-weight: 700;
  }

  & > div > .book_temp__author {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Image = styled.div`
  flex-shrink: 0;
  width: ${({ width }) => (width ? width : "204px")};
  height: ${({ height }) => (height ? height : "300px")};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray50};
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
`;
