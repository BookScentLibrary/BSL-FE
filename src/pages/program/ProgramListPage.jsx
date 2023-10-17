import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getProgramListAPI } from "../../core/redux/postSlice";
import Input from "../../components/shared/elements/Input";
import Button from "../../components/shared/elements/Button";
import { useNavigate , Link } from "react-router-dom";

const ProgramListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // 아래의 useEffect 훅이 1회 실행되어 리덕스로 요청 전달 후,
  // 리덕스에서 응답을 제대로 받았을 경우 리듀서를 통해 해당 데이터를
  // state의 program에 저장합니다.
  // useSelector는 상태관리툴을 통해 state로 저장된 데이터를 가져올 때 사용하는 훅입니다.
  // 지금은 program 데이터가 필요하기 때문에 postReducer에서 저장한 program을 가져오기 위해
  // state.post.program 경로에서 데이터를 가져오는 것입니다.
  const list = useSelector((state) => state.post.program);

  // 해당 페이지 렌더링시 실행되는 훅입니다.
  // 뒤의 [] 빈 배열은 의존성 배열로, 해당 배열에 넣은 변수값이 변경될때마다 훅이 재실행됩니다.
  // 의존성 배열에 아무런 값을 넣지 않았기 때문에 해당 훅은 최초 렌더링 1회시 한 번 실행되고, 이후 실행되지 않습니다.
  React.useEffect(() => {
    // redux의 미들웨어로 프로그램 리스트를 받아오기 위한 요청을 보냅니다.
    dispatch(getProgramListAPI());
  }, []);


  const goToDetail = (postId) => {
    navigate(`/news/program/detail/${postId}`);
  };

  /*----- 여기서부터는 검색 Input을 위해 필요한 데이터 및 함수입니다.  -----*/

  // 검색창 selectbox에 들어갈 항목명입니다.
  const optionData = ["전체검색", "제목","장소"];
  // 선택된 select option(배열 인덱스)을 관리합니다. "전체검색"=0, "제목"=1
  const [optionValue, setOptionValue] = React.useState(0);
  // 검색창에 입력된 값을 관리합니다.
  const [searchValue, setSearchValue] = React.useState(null);
  // 돋보기 버튼을 누를 경우 아래의 함수가 실행됩니다.
  // 위의 useEffect에서 요청을 보내기 위해 dispatch를 했던 것 처럼
  // 검색을 위해 실행할 요청 코드를 작성하면 됩니다.
  const onClickSearch = () => {
    console.log("확정된 검색어 : " + searchValue);
    // 　(여기서 dispatch 진행)
  };

  /*----- 여기까지는 검색 Input을 위해 필요한 데이터 및 함수입니다.  -----*/

  return (
    <Container>
      <Title>프로그램 안내</Title>

      <Description>
        <p>책향기 도서관의 다양한 프로그램을 만나보세요</p>
        <Link to="/news/programForm">
        <Button type="middle" width="180px">
          프로그램 작성하기
        </Button>
        </Link>
      </Description>

      <InputWrapper>
        <div></div>
        <Input
          inputType="search"
          size="small"
          data={optionData}
          optionValue={optionValue}
          setOptionValue={setOptionValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onClick={onClickSearch}
        />
      </InputWrapper>
      <GridContainer>
        {list &&
          list.map((program, index) => {
            return (
              <Content key={index}
                onClick={() => {
                  goToDetail(program.pro_postId);
                }}
              >
                <Image src={program.ImgURL}>
                  {/* 현재 테이블(엔티티)에 접수중/접수마감을 관리하는 상태값이 없는 것 같은데 
                1. 해당 값을 관리하는 컬럼을 짜거나  
                2. 접수 마감 기간이 종료되었을 경우 계산하여 접수 마감을 표시할 수 있도록 하는 것이 좋을 것 같습니다.
                  2번으로 진행할 경우 굳이 모집 인원 컬럼은 필요하지 않겠네요.*/}
                  {/* <StatusBadge><p>{item.status===0?"접수중" : "접수마감"}</p></StatusBadge> */}
                  <StatusBadge>
                    <p>접수중</p>
                  </StatusBadge>
                </Image>
                <Info>
                  <p className="program_info__data">
                    {program.postTitle} ({program.target})
                  </p>
                  <p className="program_info__name">접수기간</p>
                  <p className="program_info__data">
                    {program.startDate} ~ {program.endDate}
                  </p>
                </Info>
              </Content>
            );
          })}
      </GridContainer>
    </Container>
  );
};

const Image = styled.div`
  width: 280px;
  height: 396px;
  flex-shrink: 0;
  border: ${({ theme }) => `1px solid ${theme.colors.gray200}`};
  border-radius: 8px;
  background-image: ${({ src }) => (src ? `url(${src})` : "")};
`;

const StatusBadge = styled.div`
  width: 64px;
  padding: 4px 0;
  margin-left: 16px;
  background-color: ${({ status, theme }) =>
    status === 1 ? theme.colors.secondary : theme.colors.darkgreen20};
  color: #fff;
  border-radius: 0 0 4px 4px;
  & > p {
    width: fit-content;
    margin: auto;
  }
`;

const Container = styled.div`
  width: 100%;
`;
const Title = styled.div`
  width: 100%;
  font-size: 32px;
  font-weight: 700;
  padding-bottom: 20px;
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 18px 0;
  margin-bottom: 64px;
  font-size: 20px;
  font-weight: 600;
  border-top: 2px solid #000;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.gray}`};
  & > p {
    margin: 0 32px;
  }
`;

const InputWrapper = styled.div`
  padding: 0 0 12px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  cursor: pointer;
  width: 280px;
`;

const Info = styled.div`
  width: 100%;
  padding: 16px 8px;

  & > .program_info__data {
    font-weight: 600;
  }

  & > .program_info__name {
    margin-top: 12px;
    font-size: 14px;
  }
`;

const GridContainer = styled.div`
  padding: 80px 0;
  display: grid;
  gap: 42px;
  grid-template-columns: repeat(3, 1fr);
  border-top: ${({ theme }) => `2px solid ${theme.colors.gray200}`};
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.gray200}`};
`;
export default ProgramListPage;
