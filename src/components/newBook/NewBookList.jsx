import React from "react";
import styled from "styled-components";

const NewBookList = ({ items }) => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }
  return (
    <Wrapper>
      <h1>신간 도서</h1>
      <LineBold />
      <Description>최근 30일 이내 입수된 도서 목록입니다.</Description>
      <hr />
      <StyledTable>
        <thead>
          <tr>
            <Other>글번호</Other>
            <Title>제목</Title>
            <Other>저자</Other>
            <Other>발행처</Other>
            <Other>발행년도</Other>
            <Date>입수일</Date>
          </tr>
        </thead>
        <tbody>
          {items && items.length > 0 ? (
            items.map((item) => (
              <tr key={item.newBookNo}>
                <TableCell>{item.newBookNo}</TableCell>
                <TableTitle>{truncateText(item.bookname, 45)}</TableTitle>
                <TableCell>{truncateText(item.author, 3)}</TableCell>
                <TableCell>{truncateText(item.publisher, 4)}</TableCell>
                <TableCell>{item.publicationYear}</TableCell>
                <TableCell>{item.regDate}</TableCell>
              </tr>
            ))
          ) : (
            <tr>
              <NoDataCell colSpan="6">조회된 데이터가 없습니다.</NoDataCell>
            </tr>
          )}
        </tbody>
      </StyledTable>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const LineBold = styled.hr`
  height: 2px;
  background-color: black;
`;

const Description = styled.div`
  margin: 3%;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 40px;
  text-align: center;
`;

const Other = styled.th`
  padding: 15px;
  width: 10%;
  font-size: 15px;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.th`
  padding: 15px;
  width: 47%;
  font-size: 15px;
  border-bottom: 1px solid #ddd;
`;

const Date = styled.th`
  padding: 15px;
  width: 23%;
  font-size: 15px;
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
`;

const TableTitle = styled.td`
  padding: 12px;
  font-size: 14px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const NoDataCell = styled.td`
  padding: 12px;
  text-align: center;
`;

export default NewBookList;