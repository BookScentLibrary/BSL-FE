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
// * pageIdx
// 메뉴 항목 인덱스
//
// * setPageIdx
// 메뉴 항목 인덱스 setter

// 1. props.title을 메뉴의 타이틀로 지정합니다.
// 2. menuArr 배열 안에 담긴 메뉴명을 하나하나 map으로 풀어 메뉴 항목을 배치합니다.
// 3. 이 컴포넌트를 호출한 상위 컴포넌트에서 useState를 통해 pageIdx를 관리합니다.
// 4. 메뉴명을 클릭하는 순간 setPageIdx 함수를 통해 알맞는 페이지 인덱스를 넘기고,
//    상위컴포넌트는 해당 인덱스를 받아 pageIdx에 저장합니다.
// 5. 데이터가 변경되었으므로, 상위 페이지에서는 인덱스에 맞는 페이지를 노출시키고,
//    변경된 pageIdx가 다시 Menu 컴포넌트로 넘어오며,
//    pageIdx와 map을 돌리고 있는 menuArr의 인덱스가 같을 경우(=보여주고 있는 페이지가 menuArr의 인덱스와 동일할 경우)
//    className slected를 추가하도록 되어있습니다.
// 6. selected 클래스가 추가된 항목의 background-color를 지정하여 현재 머무르고 있는 메뉴를 알기 쉽게 표시하고 있습니다.

// * Example of use
// const menuArr = ['메뉴명1', '메뉴명2', '메뉴명3'];
// const [pageIdx, setPageIdx] = React.useState(0);
//
// <Menu title='소식·참여' menuArr={menuArr} pageIdx={pageIdx} setPageIdx={setPageIdx}/>

const Menu = (props) => {
  const { title, menuArr, pageIdx, setPageIdx } = props;

  return (
    <React.Fragment>
      <MenuTable $menu={menuArr.length}>
        <Title>{title ? title : "Title"}</Title>
        {menuArr ? (
          menuArr.map((cur, idx) => {
            if (pageIdx === idx) {
              return (
                <MenuContent
                  key={idx}
                  className="selected"
                  onClick={() => setPageIdx(idx)}
                >
                  {cur}
                </MenuContent>
              );
            }
            return (
              <MenuContent key={idx} onClick={() => setPageIdx(idx)}>
                {cur}
              </MenuContent>
            );
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
  grid-template-rows: ${({ $menu }) =>
    $menu
      ? $menu === 3
        ? "88px 1fr 1fr 1fr"
        : "88px 1fr 1fr 1fr 1fr"
      : "88px 1fr 1fr 1fr 1fr"};
  gap: 0px 0px;

  height: ${({ $menu }) =>
    $menu ? ($menu === 3 ? "257px" : "313px") : "313px"};
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

  &.selected {
    background-color: ${({ theme }) => theme.colors.gray100};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;

export default Menu;
