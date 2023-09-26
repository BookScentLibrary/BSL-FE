import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import MainPageTemplate from "../components/main/MainPageTemplate";
import { getBookTestAPI } from "../core/redux/bookSlice";

const MainPage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getBookTestAPI());
  }, []);

  return (
    <div>
      <MainPageTemplate />

      <CatalogBtn onClick={() => navigate("/compcat")}>
        컴포넌트
        <br />
        카탈로그
      </CatalogBtn>
    </div>
  );
};

export const CatalogBtn = styled.button`
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  background-color: ${({theme}) => theme.colors.secondary};
  box-shadow: 4px 4px 8px 0 #ddd;
  z-index: 10000;
`;

export default MainPage;
