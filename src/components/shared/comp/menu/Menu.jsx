import React from "react";
import styled from "styled-components";

/* ----- 상위 컴포넌트에서 pageIdx state를 관리합니다. -----*/
// const [pageIdx, setPageIdx] = React.useState(0);
// pageIdx 함수는 Menu 컴포넌트에 props 'selected'로 넘겨주세요
// ex) <Menu title="title" selected={pageIdx}>...</Menu>

/* ----- 자식요소(<p>태그)에 페이지 이동 함수를 달아주세요 ----- */
// const goToPage = () => { setPageIdx(1) };
// <p onClick={goToPage}>menu</p>

/* ----- 실제 작성 예시 ----- */
// <Menu title={"자료 검색"} selected={pageIdx}>
//  <p className="menu_first" onClick={goToSearch}>소장자료</p>
//  <p className="menu_second" onClick={goToNewBook}>신간 도서</p>
//  <p className="menu_third" onClick={goToBestseller}>인기 대출 도서</p>
//  <p className="menu_fourth" onClick={goToRecommend}>사서 추천 도서</p>
// </Menu>

/* ----- 이렇게 동작합니다. ----- */
// 1. 상위 컴포넌트에서 Menu 컴포넌트를 호출해 자식 요소(메뉴항목)로 <p> 태그를 넘겨주면
//    Menu에선 자식 요소들을 모두 불러와 map 함수를 통해 하나하나 알맞은 위치에 풀어놓습니다. 
//
// 2. 자식 요소들의 갯수를 통해 Menu 컴포넌트의 전체적인 height값을 지정합니다.
//    현재는 요소가 3개인 경우 257px, 4개인 경우 313px로 지정되어있습니다.  
//
// 3. <p>태그에 첨부된 props중 onClick 함수를 MenuComponent의 MenuContent에 전달해 
//    좀 더 넓은 영역을 클릭해도 동작하도록 합니다. 
//
// 4. <Menu> 컴포넌트에 전달된 selected(상위 컴포넌트의 pageIdx = 선택된 메뉴 index)와 
//    일치하는 menu 항목의 background-color를 지정하여 선택된 메뉴를 좀 더 알기 쉽게 합니다. 

const Menu = (props) => {
  const { title, children, selected } = props;
  const childCnt = React.Children.count(children);
  return (
    <React.Fragment>
      <MenuTable $menu={childCnt}>
        <Title>{title ? title : "Title"}</Title>
        {children.map((cur, idx) => {
          if (selected === idx) {
            return (
              <MenuContent
                className="selected"
                onClick={cur.props.onClick}
                key={idx}
              >
                {cur}
              </MenuContent>
            );
          } else {
            return (
              <MenuContent onClick={cur.props.onClick} key={idx}>
                {cur}
              </MenuContent>
            );
          }
        })}
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
