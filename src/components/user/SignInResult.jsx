import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import MainPage from "../main/MainPageTemplate"

const SignInResult = () => {
    const [boardResponse, setBoardResponse] = useState("");
    const [cookies] = useCookies();
    // 리덕스로 연결하는거 찾기
    // const { user } = useUserSore();

    const getBoard = async (token) => {
        const requestOption = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        };
        //어떤 주소로 가야하는지 수정
        await axios.get('http://localhost:8080/', requestOption).then((response) => {
            setBoardResponse(response.data);
        }).catch((error) => '');
    }

    useEffect(() => {
        const token = cookies.token;
        if(token) getBoard(token);
        //리덕스로 유저 객체를 연결하는 방법 찾기
    }, [cookies.token]);

  return (
  <>
    <MainPage />
    {boardResponse ? () : ()}
  </>
  )
}

export default SignInResult;
