import React, { useState, useEffect } from "react";
import styled from "styled-components";

const NewBooksList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const newBooksData = Array.from({ length: 20 }, (_, index) => ({
            newBooksNo: index + 1
        }));
        setItems(newBooksData);
    }, []);

    return (
        <div>
            <h1>신간 도서</h1>
            <hr />
            <Pd>
                최근 30일 이내 입수된 도서 목록입니다.
                <Btn>신간 도서 등록</Btn>
            </Pd>
            <hr />
            <table>
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

export default NewBooksList;

//tr style 변경