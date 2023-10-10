import React, { useState } from "react";
import styled from "styled-components";

const NewBooksMain = () => {
    const [items, setItems] = useState([]);
    return (
        <div>
            <h1>신간 도서</h1>
            <hr />
            <Pd>
                최근 30일 이내 입수된 도서 목록입니다. //여기 버튼 모양 이상해요
                <Btn>신간 도서 등록</Btn>
            </Pd>
            <hr />
            <table>
                <thead>
                        <Other>글번호</Other>
                        <Title>제목</Title>
                        <Other>저자</Other>
                        <Other>발행처</Other>
                        <Other>발행년도</Other>
                        <Date>입수일</Date>
                </thead>
                <tbody>
                    {items.map((items) => (
                        <tr key={items.bookNo}>
                            <td>{items.bookNo}</td>
                            <td>{items.bookname}</td>
                            <td>{items.author}</td>
                            <td>{items.publisher}</td>
                            <td>{items.publicationYear}</td>
                            <td>{items.regDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const Btn = styled.button`
    float: right;
    background: ${({ color, theme }) =>
        color
        ? color === "red"
        ? theme.colors.secondary
        : color === "gray"
        ? theme.colors.gray
        : theme.colors.primary
        : theme.colors.primary};
    border-radius: 3px;
    width: ${({ width }) => (width ? width : "110px")};
    height: ${({ height }) => (height ? height : "35px")};
    color: #fff;
    border: none;

    &:hover {
        background: ${({ color, theme }) =>
            color
            ? color === "red"
            ? theme.colors.darkred5
            : color === "gray"
            ? theme.colors.grayhover
            : theme.colors.darkgreen5
            : theme.colors.darkgreen5};
    }
`;

const Pd = styled.div`
    padding: 2%;
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

export default NewBooksMain;

//데이터베이스에서 regDate 큰 순으로 정렬해서 20개를 추출해야함