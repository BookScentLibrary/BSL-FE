import React from "react";
import Flex from "../shared/elements/Flex";
import MoreButton from "../shared/elements/MoreButton";
import styled from "styled-components";

const RentHistory = () => {
  const books = [
    {
      title: "책제목1",
      author: "작가1",
    },
    {
      title: "책제목2",
      author: "작가2",
    },
    {
      title: "책제목3",
      author: "작가3",
    },
    {
      title: "책제목4",
      author: "작가5",
    },
    {
      title: "책제목5",
      author: "작가5",
    },
  ];
  return (
    <Container>
      <Flex sb center>
        <p className="mypage_harp__title">대출 내역</p>
        <MoreButton />
      </Flex>
      <Books>
        {books &&
          books.map((cur, i) => {
            return (
              <Book>
                <Image />
                <p className="title">{cur.title}</p>
                <p className="author">{cur.author}</p>
              </Book>
            );
          })}
      </Books>
    </Container>
  );
};
const Container = styled.div`
  box-sizing: border-box;
  padding: 28px 40px;
  margin: 24px 0;
  width: 100%;
  height: 500px;
  border-radius: 20px;
  background-color: #fff;

  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.05);

  & > div > .mypage_harp__title {
    font-size: 24px;
  }
`;

const Books = styled.div`
  display: flex;
  width: fit-content;
  gap: 24px;
  margin: 32px auto;
`;

const Book = styled.div`
  width: fit-content;
  height: fit-content;
  & > .title {
    margin: 14px 0 0 0;
    font-weight: 700;
  }
  & > .author {
    margin: 8px 0 0 0;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const Image = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.gray200}`};
  background-color: ${({ theme }) => theme.colors.gray50};
  width: 184px;
  height: 276px;
  border-radius: 8px;
`;

export default RentHistory;
