import React from "react";
import styled from "styled-components";
import MoreButton from "../shared/elements/MoreButton";
import { useNavigate } from "react-router-dom";

const NOTICE = [
  {
    title: "공지사항1",
    createdAt: "2023-08-25",
  },
  {
    title: "공지사항2",
    createdAt: "2023-08-25",
  },
  {
    title: "공지사항3",
    createdAt: "2023-08-25",
  },
  {
    title: "공지사항4",
    createdAt: "2023-08-25",
  },
];

const PROGRAM = [
  {
    title: "프로그램 안내1",
    createdAt: "2023-08-25",
  },
  {
    title: "프로그램 안내2",
    createdAt: "2023-08-25",
  },
  {
    title: "프로그램 안내3",
    createdAt: "2023-08-25",
  },
];

const MainNotice = () => {
  const navigate = useNavigate();

  const goToNotice = () => {
    navigate("/news/noticeList");
  };
  const goToProgram = () => {
    navigate("/");
  };

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
            {NOTICE.map((cur, idx) => {
              return (
                <Content key={idx}>
                  <p>{cur.title}</p>
                  <p>{cur.createdAt}</p>
                </Content>
              );
            })}
          </ContentContainer>
        </NoticeSection>
        <ProgramSection>
          <Title>
            프로그램 안내
            <MoreButton onClick={goToProgram} />
          </Title>
          <ContentContainer>
            {PROGRAM.map((cur, idx) => {
              return (
                <Content key={idx}>
                  <p>{cur.title}</p>
                  <p>{cur.createdAt}</p>
                </Content>
              );
            })}
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
`;

const ProgramSection = styled.div`
  margin-top: 32px;
  width: 100%;
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
`;

export default MainNotice;
