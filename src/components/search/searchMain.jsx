
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import React,{useState} from "react";

const SearchMain = () => {
 
    const[searchTerm, setSearchTerm] = useState(""); //검색어의 상태
    const dispatch = useDispatch(); 
    //searchBooks 액션을 디스패치하여 검색 요청을 서버로 보내고, Redux 상태를 업데이트

    const searchBookForm = () => {
        //검색 버튼 클릭 시 실행될 함수
        dispatch(searchBooks(searchTerm));
        //searchBooks액션을 사용하려면, Redux에서 사용할 액션과 액션생성자 함수가 필요,
        //이 액션은 서버로 요청을 보내고 응답처리해야함.
    };

  return (
    <form>
    <div class='search'>
    <input type='text' name='b_name' placeholder='Enter the name of the book you are looking for.'
     value={searchTerm}
     onChange={(e) => setSearchTerm(e.target.value)} //검색어 입력값을 업데이트 
    ></input>
   <input type='button' value='search' onClick={searchBookForm}></input></div>
    </form>
  );
};



export default SearchMain;




