import React, { useState } from "react";
import styled from "styled-components";

const NewBooksMain = () => {
    const [items, setItems] = useState([]);
    return (
        <div>
            <h1>신간 도서</h1>
            <hr />
            <div>
                최근 30일 이내 입수된 도서 목록입니다.
                <button>신간 도서 등록</button>
            </div>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>글번호</th>
                        <th>제목</th>
                        <th>저자</th>
                        <th>발행처</th>
                        <th>발행년도</th>
                        <th>입수일</th>
                    </tr>
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

export default NewBooksMain;