import React, { useState, useEffect } from "react";
import NewBookList from "./NewBookList";
import { newBookAPI } from "../../core/apis/newBook";

const NewBookDetail = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await newBookAPI.getNewBookList();
                if (response.data) {
                    const newBookData = response.data.map((item, index) => ({
                        newBookNo: index + 1,
                        bookNo: item.bookNo,
                        bookname: item.bookname,
                        author: item.author,
                        publisher: item.publisher,
                        publicationYear: item.publicationYear,
                        regDate: item.regDate
                    }));
                    setItems(newBookData);
                }
            } catch (error) {
                console.error('Error fetching new books:', error);
            }
        };

        fetchData();
    }, []);

    return <NewBookList items={items} />;
};

export default NewBookDetail;
