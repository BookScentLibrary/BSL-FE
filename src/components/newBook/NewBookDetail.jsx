import React, { useState, useEffect } from "react";
import NewBookList from "./NewBookList";
import axios from 'axios';

const NewBookDetail = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/newBook/list');
                if (response && response.data) {
                    const newBookData = response.data.map((item, index) => ({
                        newBooksNo: index + 1,
                        ...item
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
