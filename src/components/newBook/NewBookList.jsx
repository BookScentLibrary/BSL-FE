import React from "react";
import styled from "styled-components";

const NewBookList = ({ items }) => {
    return (
        <div>
            <h1>신간 도서</h1>
            <hr />
            <Pd>
                최근 30일 이내 입수된 도서 목록입니다.
            </Pd>
            <hr />
            <Table>
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
                    {items.map((item) => (
                        <tr key={item.newBooksNo}>
                            <td>{item.newBooksNo}</td>
                            <td>{item.bookname}</td>
                            <td>{item.author}</td>
                            <td>{item.publisher}</td>
                            <td>{item.publicationYear}</td>
                            <td>{item.regDate}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

const Pd = styled.div`
    padding: 2%;
`;

const Table = styled.table`
    text-align: center;    
`;

const Other = styled.th`
    padding: 10px 30px;
`;

const Title = styled.th`
    padding: 10px 150px;
`;

const Date = styled.th`
    padding: 10px 50px;
`;

export default NewBookList;