import React, { useState, useEffect } from "react";
import NewBookList from "./NewBookList";
import axios from 'axios';

const NewBookDetail = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/newBook/list');
                if (response.data) {
                    const newBookData = response.data.map((item, index) => ({
                        bookNo: item.bookNo,
                        newBookNo: index + 1,
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

    useEffect(() => {
        setItems(prevItems =>
            prevItems.map((item, index) => ({
                ...item,
                newBookNo: index + 1
            }))
        );
    }, [items]);

    return <NewBookList items={items} />;
};

export default NewBookDetail;