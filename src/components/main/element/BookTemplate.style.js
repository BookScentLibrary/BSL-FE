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
  width: 306px;
  gap: 20px;
  cursor: pointer;
`;

export const Recommend = styled.div`
  width: 396px;
  height: 346px;
  background-color: #fafafa;
  border-radius: 10px;
  cursor: pointer;

  & > div {
    display: flex;
    gap: 32px;
    width: 100%;
    height: 100%;
    padding: 32px;
  }

  & > div > div > .book_temp__title {
    font-weight: 700;
  }

  & > div > div > .book_temp__author {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray};
  }

  & > div > .content {
    width: 152px;
  }
`;

export const Info = styled.div`
  width: 178px;
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
  width: ${({ width }) => (width ? width : "204px")};
  height: ${({ height }) => (height ? height : "300px")};
  border: ${({ theme }) => `1px solid ${theme.colors.gray200}`};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray50};
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
`;
