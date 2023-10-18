import React from "react";
import styled from "styled-components";
import MoreButton from "../shared/elements/MoreButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mainNoticeAPI, mainProgramAPI } from "../../core/redux/mainSlice";

const MainNotice = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notice = useSelector((state) => state.main.notice);
  const program = useSelector((state) => state.main.program);

  const goToNotice = () => {
    navigate("/news/noticeList");
  };
  const goToProgram = () => {
    navigate("/news/programList");
  };

  React.useEffect(() => {
    dispatch(mainNoticeAPI());
    dispatch(mainProgramAPI());
  }, []);

  return (
    <Container>
      <BannerContainer>
        <BannerLong src="https://imgbuckett.s3.ap-northeast-2.amazonaws.com/banner_main_1.png" />
        <BannerFlexWrapper>
          <BannerShort src="https://imgbuckett.s3.ap-northeast-2.amazonaws.com/banner_main_3.png" />
          <BannerShort src="https://imgbuckett.s3.ap-northeast-2.amazonaws.com/banner_main_2.png" />
        </BannerFlexWrapper>
      </BannerContainer>
      <BoardContainer>
        <NoticeSection>
          <Title>
            공지사항
            <MoreButton onClick={goToNotice} />
          </Title>
          <ContentContainer>
            {notice && notice.length > 0 ? (
              notice.map((cur, idx) => {
                return (
                  <Content key={idx}>
                    <p className="title">{cur.title}</p>
                    <p>{cur.createdAt}</p>
                  </Content>
                );
              })
            ) : (
              <NotData>조회된 공지사항이 없습니다.</NotData>
            )}
          </ContentContainer>
        </NoticeSection>
        <ProgramSection>
          <Title>
            프로그램 안내
            <MoreButton onClick={goToProgram} />
          </Title>
          <ContentContainer>
            {program && program.length > 0 ? (
              program.map((cur, idx) => {
                const date = new Date(cur.createdAt);
                const year = date.getFullYear();
                const month =
                  date.getMonth() > 9 ? date.getMonth : "0" + date.getMonth();
                const day =
                  date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
                return (
                  <Content key={idx}>
                    <p className="title">{cur.postTitle}</p>
                    <p>
                      {year}.{month}.{day}
                    </p>
                  </Content>
                );
              })
            ) : (
              <NotData>조회된 프로그램이 없습니다.</NotData>
            )}
          </ContentContainer>
        </ProgramSection>
      </BoardContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 88px 0;
`;

const BannerContainer = styled.div`
  display: grid;
  gap: 20px;
  width: 414px;
`;

const BannerLong = styled.div`
  width: 100%;
  height: 192px;
  background-color: ${({ theme }) => theme.colors.gray50};
  border-radius: 8px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
`;

const BannerFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BannerShort = styled.div`
  width: 194px;
  height: 194px;
  background-color: ${({ theme }) => theme.colors.gray50};
  border-radius: 8px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
`;

const BoardContainer = styled.div`
  width: 756px;
`;

const NoticeSection = styled.div`
  width: 100%;
  height: 198px;
`;

const ProgramSection = styled.div`
  margin-top: 32px;
  width: 100%;
  height: 159px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  border-bottom: 1px solid #000;
`;

const ContentContainer = styled.div`
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  justify-content: space-between;

  & > .title {
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.darkgray};
    }
  }
`;
const NotData = styled.div`
  margin: 70px auto;
  width: fit-content;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray};
`;

export default MainNotice;
