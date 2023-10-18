import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "../components/shared/elements/Button";
import { ReactComponent as MapIcon } from "../asset/icons/f/dizzy.svg";
import Flex from "../components/shared/elements/Flex";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <React.Fragment>
      <Container>
        <InfoSection>
          <Div>
            <MapIcon width="100px" height="100px" />
          </Div>
          <Text>
            <p className="error">404</p>
            <p className="title">요청하신 페이지를 찾을 수 없습니다. </p>
            <Button width="180px" onClick={goBack}>돌아가기</Button>
          </Text>
        </InfoSection>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 60px 0;
`;

const InfoSection = styled.div`
  margin: auto;
  width: fit-content;
  height: 800px;
  text-align: center;
`;

const Div = styled.div`
  transform: rotate(-20deg);
`;

const Text = styled.div`
  margin-top: -20px;
  text-align: center;
  & > .error {
    font-size: 180px;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 900;
    transform: rotate(4deg);
  }
  & > .title {
    font-size: 32px;
  }

  & > button {
    margin: 40px 0;
  }
`;

export default NotFound;
