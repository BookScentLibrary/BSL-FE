import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


// Menu Component 
//
// * title
// 메뉴 타이틀 
// ex . '소식·참여'
//
// * menuArr
// 메뉴 항목명
// ex . ['도서 검색', '리뷰게시판', '공지사항', '프로그램안내'];
// 
// * setPageIdx
// 메뉴 항목 인덱스
//
// * Example of use
// const menuArr = ['메뉴명1', '메뉴명2', '메뉴명3'];
// const [pageIdx, setPageIdx] = React.useState(0);
// 
// <Menu title='소식·참여' menuArr={menuArr} setPageIdx={setPageIdx}/>


const Menu = (props) => {
  const { title, menuArr, setPageIdx } = props;

  return (
    <React.Fragment>
      <MenuTable menu={menuArr}>
        <Title>{title? title : 'Title'}</Title>
        {menuArr ? (
          menuArr.map((cur, idx) => {
            return <MenuContent key={idx} onClick={() => setPageIdx(idx)}>{cur}</MenuContent>;
          })
        ) : (
          <>
            <MenuContent>menu1</MenuContent>
            <MenuContent>menu2</MenuContent>
            <MenuContent>menu3</MenuContent>
            <MenuContent>menu4</MenuContent>
          </>
        )}
      </MenuTable>
    </React.Fragment>
  );
};

const MenuTable = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${({menu}) => menu? (menu.length === 3? '88px 1fr 1fr 1fr':'88px 1fr 1fr 1fr 1fr'):'88px 1fr 1fr 1fr 1fr'};
  gap: 0px 0px;

  height: ${({menu}) => menu? (menu.length === 3? '257px' : '313px') : '313px'};
  width: 240px;

  border: 1px solid #000;
  border-radius: 4px;
`;

const Title = styled.div`
  display: flex;

  height: 88px;

  align-items: center;
  justify-content: center;

  border-bottom: 1px solid #000;

  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.large};

  z-index: 100;
`;

const MenuContent = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;

export default Menu;
